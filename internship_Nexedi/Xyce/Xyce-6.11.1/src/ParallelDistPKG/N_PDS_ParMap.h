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

//-----------------------------------------------------------------------------
//
// Purpose        : Specification file for abstract base class for the parallel
//                  map data and functions.
//
// Special Notes  : Part of a GoF Abstract Factory.
//
// Creator        : Scott A. Hutchinson, SNL, Parallel Computational Sciences
//
// Creation Date  : 03/08/00
//
//
//
//
//-----------------------------------------------------------------------------

#ifndef Xyce_N_PDS_ParMap_h
#define Xyce_N_PDS_ParMap_h

// ---------- Standard Includes ----------

#include <vector>
#include <map>

// ----------   Xyce Includes   ----------

#include <N_PDS_fwd.h>

class Epetra_Map;
class Epetra_BlockMap;

//-----------------------------------------------------------------------------
// Class         : N_PDS_ParMap
// Purpose       : Abstract base class for the parallel map data and functions.
// Special Notes :
// Creator       : Scott A. Hutchinson, SNL, Parallel Computational Sciences
// Creation Date : 03/08/00
//-----------------------------------------------------------------------------
class N_PDS_ParMap
{

public:
  // Constructors
  N_PDS_ParMap( int & numGlobalEntities,
                int numLocalEntities,
                const std::vector<int> & lbMap,
                const int index_base,
                N_PDS_Comm & aComm);

  // Constructor, let the underlying linear algebra determine the IDs.
  N_PDS_ParMap( int & numGlobalEntities,
                int numLocalEntities,
                const int index_base,
                N_PDS_Comm & aComm);

  // Destructor
  ~N_PDS_ParMap();

  // Constructor which takes a Epetra map (private).
  N_PDS_ParMap(Epetra_Map * pMap,
               N_PDS_Comm & aComm);

private:

  // Copy constructor (private).
  N_PDS_ParMap(const N_PDS_ParMap & right);

  // Assignment operator (private).
  N_PDS_ParMap & operator=(const N_PDS_ParMap & right);

  // Equality operator (private).
  bool operator==(const N_PDS_ParMap & right) const;

  // Non-equality operator (private).
  bool operator!=(const N_PDS_ParMap & right) const;

public:

  // Number of global "entities" represented as vertices in the graph. These
  // may be, for example, equations for the linear algebra quantities or
  // devices/nodes for the circuit graph.
  int numGlobalEntities() const;

  // Number of local (on processor) "entities".
  int numLocalEntities() const;

  // Indexing base (0 or 1) used for the maps.
  int indexBase() const;

  // Maximum globally-numbered identifier.
  // This is used predominately for block linear algebra.
  int maxGlobalEntity() const;

  // Comm object
  N_PDS_Comm &pdsComm() { return pdsComm_; }
  const N_PDS_Comm &pdsComm() const { return pdsComm_; }

  // Accessor functions (overridden in derived classes) for the pointer to the
  // library map object.
  Epetra_Map * petraMap() { return petraMap_; }
  const Epetra_Map * petraMap() const { return petraMap_; }

  Epetra_BlockMap * petraBlockMap();

  // dereference global index to get local index
  int globalToLocalIndex(int global_index) const;

  // dereference local index to get global index
  int localToGlobalIndex(int local_index) const;

private:

  // Pointer to Petra map object.
  Epetra_Map * petraMap_;
  bool mapOwned_;

  // Pointer to comm object.
  N_PDS_Comm &          pdsComm_;
};

#endif
