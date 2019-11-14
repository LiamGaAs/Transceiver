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
// Purpose        : Builder for ES specific linear objects
//
// Special Notes  :
//
// Creator        : Eric Keiter, SNL
//
// Creation Date  : 05/31/2018
//
//
//
//
//-----------------------------------------------------------------------------

#ifndef  Xyce_LAS_ESBUILDER_H
#define  Xyce_LAS_ESBUILDER_H

// ---------- Standard Includes ----------

#include <string>
#include <vector>

// ----------   Xyce Includes   ----------
#include <N_LAS_fwd.h>

#include <N_LAS_Builder.h>

#include <Teuchos_RCP.hpp>

// ---------- Forward Declarations ----------


class Epetra_MapColoring;
class Epetra_Map;
class Epetra_CrsGraph;

class N_PDS_ParMap;

namespace Xyce {
namespace Linear {

//-----------------------------------------------------------------------------
// Class         : ESBuilder
// Purpose       :
// Special Notes :
// Creator       : Eric Keiter, SNL
// Creation Date : 05/31/2018
//-----------------------------------------------------------------------------
class ESBuilder : public Builder
{
 public:

  // Default Constructor
  
  ESBuilder( const int Size );

  // Destructor
  ~ESBuilder() {}

  // Vector and Matrix creators

  // Vector factory with initial value
  Vector * createVector( double initialValue = 0.0 ) const;

  // State Vector factory with initial value
  Vector * createStateVector( double initialValue = 0.0 ) const;

  // Store Vector factory with initial value
  Vector * createStoreVector( double initialValue = 0.0 ) const;

  // Lead Current Vector factory with initial value
  Vector * createLeadCurrentVector( double initialValue = 0.0 ) const;

  Teuchos::RCP<BlockVector> createBlockVector() const;
  Teuchos::RCP<BlockVector> createTransposeBlockVector() const;
  Teuchos::RCP<BlockVector> createTransposeStateBlockVector() const;
  Teuchos::RCP<BlockVector> createTransposeStoreBlockVector() const;
  Teuchos::RCP<BlockVector> createTransposeLeadCurrentBlockVector() const;

  // Matrix factory
  Matrix * createMatrix( double initialValue = 0.0 ) const;
  Teuchos::RCP<BlockMatrix> createBlockMatrix( double initialValue = 0.0 ) const;

  // DAE Jacobians
  Matrix * createDAEdQdxMatrix( double initialValue = 0.0 ) const { return 0; }
  Matrix * createDAEdFdxMatrix( double initialValue = 0.0 ) const { return 0; }
  Matrix * createDAEFullMatrix( double initialValue = 0.0 ) const { return 0; }

  bool generateMaps( const Teuchos::RCP<N_PDS_ParMap>& BaseMap, 
                     const Teuchos::RCP<N_PDS_ParMap>& oBaseMap );

  bool generateStateMaps( const Teuchos::RCP<N_PDS_ParMap>& BaseStateMap );
  bool generateStoreMaps( const Teuchos::RCP<N_PDS_ParMap>& BaseStoreMap );
  bool generateLeadCurrentMaps( const Teuchos::RCP<N_PDS_ParMap>& BaseLeadCurrentMap );

  bool generateGraphs( const Epetra_CrsGraph & BaseFullGraph );

  // Return maps for sampling linear system.
  Teuchos::RCP<const N_PDS_ParMap> getSolutionMap() const
  { return( ESMap_ ); }

  Teuchos::RCP<N_PDS_ParMap> getSolutionMap()
  { return( ESMap_ ); }

  Teuchos::RCP<N_PDS_ParMap> getSolutionOverlapMap() const
  { return oESMap_; }

  // Return the base map for each block in the expanded maps (a.k.a. time-domain maps)
  Teuchos::RCP<const N_PDS_ParMap> getBaseSolutionMap() const
  { return BaseMap_; }

  Teuchos::RCP<const N_PDS_ParMap> getBaseStateMap() const
  { return BaseStateMap_; }

  Teuchos::RCP<const N_PDS_ParMap> getBaseStoreMap() const
  { return BaseStoreMap_; }
  
  Teuchos::RCP<const N_PDS_ParMap> getBaseLeadCurrentMap() const
  { return BaseLeadCurrentMap_; }

  // Return GID offset for blocks for construction of Loader
  int getESOffset()
  { return offset_; }

  int getESStateOffset()
  { return stateOffset_; }

  int getESStoreOffset()
  { return storeOffset_; }
  
  int getESLeadCurrentOffset()
  { return leadCurrentOffset_; }

  int getNumSamples()
  { return numSamples_; }

private:
  const int numSamples_;
  int numSolVariables_, numStateVariables_;
  int numStoreVariables_;
  int numLeadCurrentVariables_;

  int offset_, stateOffset_;
  int storeOffset_;
  int leadCurrentOffset_;

  // ES maps for block vectors (BV):
 // numBlocks = number of samples, numElem = number of solution variables
  
  // numBlocks = number of solution variables, numElem = number of samples
  Teuchos::RCP<N_PDS_ParMap> BaseMap_, oBaseMap_;

  Teuchos::RCP<N_PDS_ParMap> BaseStateMap_;
  Teuchos::RCP<N_PDS_ParMap> BaseStoreMap_;
  Teuchos::RCP<N_PDS_ParMap> BaseLeadCurrentMap_;

  Teuchos::RCP<Epetra_CrsGraph> BaseFullGraph_;
  Teuchos::RCP<Epetra_CrsGraph> blockGraph_;

  std::vector<std::vector<int> > blockPattern_;

  Teuchos::RCP<N_PDS_ParMap> ESMap_, oESMap_;
  Teuchos::RCP<N_PDS_ParMap> ESStateMap_;
  Teuchos::RCP<N_PDS_ParMap> ESStoreMap_;
  Teuchos::RCP<N_PDS_ParMap> ESLeadCurrentMap_;
};

} // namespace Linear
} // namespace Xyce

#endif
