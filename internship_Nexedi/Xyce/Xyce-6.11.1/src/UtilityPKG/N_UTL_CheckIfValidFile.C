//-------------------------------------------------------------------------
//   Copyright 2002-2019 National Technology & Engineering Solutions of
//   Sandia, LLC (NTESS).  Under the terms of Contract DE-NA0003525 with
//   NTESS, the U.S. Government retains certain rights in this software.
//
//   This file is part of the Xyce(TM) Parallel Electrical Simulator.
//
//   Xyce(TM) is free software: you can redistribute it and/or modify
//   it under the terms of the GNU General Public License as published by
//   the Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   Xyce(TM) is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//
//   You should have received a copy of the GNU General Public License
//   along with Xyce(TM).
//   If not, see <http://www.gnu.org/licenses/>.
//-------------------------------------------------------------------------

#include <Xyce_config.h>

#include <fstream>
#include <string>

#ifdef HAVE_SYS_STAT_H
#include <sys/stat.h>
// Windows is a Special Case, and stat.h does not define this macro.
#ifndef S_ISREG
#ifdef _S_IFREG
#define S_ISREG(mode) (((mode) & _S_IFMT) == _S_IFREG)
#else
#error stat.h missing S_ISREG and _S_IFREG.  Cannot proceed
#endif
#endif
#endif

namespace Xyce{
namespace Util {

//-----------------------------------------------------------------------------
// Function      : checkIfValidFile
// Purpose       : Verify that a user-specified file (e.g, netlist file on
//                 the Xyce command line) is valid and can be opened.  This
//                 function will return false if the file does not exist, cannot 
//                 be opened, or if the user accidentally specified a directory 
//                 name rather than a file name.  See SON Bugs 730 and 785 
//                 for more details.
// Special Notes : This code was originally created by Tom Russo, and was in
//                 N_CIR_Xyce.C.  It was moved to a utility function, since
//                 this check was needed in multiple places in the Xyce source
//                 code.
// Creator       : Pete Sholander, SNL
// Creation Date : 07/10/2017
//-----------------------------------------------------------------------------

bool checkIfValidFile(std::string netlist_filename)
{
  bool isValidFile = true;

#ifdef HAVE_SYS_STAT_H
  // try to open the specified file
  FILE *fp = fopen(netlist_filename.c_str(), "r");
  int fstatret = 0;
  struct stat fileInfo;
  if (fp)
  {
    fstatret = fstat(fileno(fp), &fileInfo);
  }

  // return false if fp is null, the fstat command failed (returned something
  // other than zero), or the POSIX S_ISREG macro says it's "not a regular file"
  if ( (fp == NULL) || (fstatret != 0) || !S_ISREG(fileInfo.st_mode))
  {
    isValidFile=false;
  }

  // close fp to prevent a "LEAK SUMMARY: still reachable" warning from Valgrind
  if (fp != NULL)
  { 
    fclose(fp);
  }
#else
  std::ifstream is(netlist_filename.c_str(), std::ios_base::in);
  if (!is)
  {
    isValidFile=false;
  }
#endif

  return isValidFile;
}

} // namespace Util
} // namespace Xyce
