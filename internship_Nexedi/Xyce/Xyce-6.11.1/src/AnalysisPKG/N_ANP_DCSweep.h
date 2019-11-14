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
// Purpose        : DC sweep analysis class
//
// Special Notes  : Specify any "hidden" or subtle details of the class here.
//                  Portability details, error handling information, etc.
//
// Creator        : Richard Schiek, SNL, Electrical and Microsystem Modeling
//
// Creation Date  : 01/24/08
//
//
//
//
//-----------------------------------------------------------------------------

#ifndef Xyce_N_ANP_DCSweep_h
#define Xyce_N_ANP_DCSweep_h

// ----------   Xyce Includes   ----------
#include <N_ANP_fwd.h>
#include <N_TOP_fwd.h>

#include <N_ANP_AnalysisBase.h>
#include <N_ANP_RegisterAnalysis.h>
#include <N_UTL_OptionBlock.h>

namespace Xyce {
namespace Analysis {

//-------------------------------------------------------------------------
// Class         : DCSweep
// Purpose       : Transient analysis class
// Special Notes :
// Creator       : Richard Schiek, SNL, Electrical and Microsystem Modeling
// Creation Date : 01/24/08
//-------------------------------------------------------------------------
class DCSweep : public AnalysisBase
{
public:
  DCSweep(
    AnalysisManager &                   analysis_manager,
    //Linear::System &                    linear_system,
    Linear::System *                    linear_system_ptr,
    Nonlinear::Manager &                nonlinear_manager,
    Loader::Loader &                    loader,
    Topo::Topology &                    topology,
    IO::InitialConditionsManager &      initial_conditions_manager,
    HB *                                hb_analysis = 0);  // HACK TO GET US MOVING FORWARD, should pass output adapter or something

  virtual ~DCSweep();

  void setTIAParams(const TimeIntg::TIAParams &tia_params)
  {
    tiaParams_ = tia_params;
  }

  const TimeIntg::TIAParams &getTIAParams() const
  {
    return tiaParams_;
  }

  TimeIntg::TIAParams &getTIAParams()
  {
    return tiaParams_;
  }

  bool setAnalysisParams(const Util::OptionBlock & paramsBlock); 
  bool setDataStatements(const Util::OptionBlock & paramsBlock);
  bool setTimeIntegratorOptions(const Util::OptionBlock &option_block);

  void convertDataToSweepParams();

  bool outputFailureStats(std::ostream &os);

  bool getDCOPFlag() const // override
  {
    return true;
  }

  void registerLinearSystem(Linear::System * linear_system_ptr)
  {
    linearSystemPtr_ = linear_system_ptr;
  }

  void stepCallback();
  void registerParentAnalysis(AnalysisBase * parentPtr)
  {
    parentAnalysisPtrVec_.push_back(parentPtr);
  };


protected:
  bool doRun(); // override;
  bool doInit(); // override;
  bool doLoopProcess(); // override;
  bool doProcessSuccessfulStep(); // override;
  bool doProcessFailedStep(); // override;
  bool doFinish(); // override;
  bool doHandlePredictor(); // override;

public:
  // Two Level specific
  bool twoLevelStep();

  void printStepHeader(std::ostream &os);
  bool printLoopInfo(int start, int finish);

  // used to provide the DC Sweep Vector to remeasure
  SweepVector getDCSweepVec();

private:
  void dcSweepOutput();
  void initializeSolution_();
  void takeStep_ ();

private:
  AnalysisManager &                     analysisManager_;
  Loader::Loader &                      loader_;
  //Linear::System &                      linearSystem_;
  Linear::System *                      linearSystemPtr_;
  Nonlinear::Manager &                  nonlinearManager_;
  Topo::Topology &                      topology_;
  IO::InitialConditionsManager &        initialConditionsManager_;
  OutputMgrAdapter &                    outputManagerAdapter_;
  HB *                                  hbAnalysis_;
  TimeIntg::TIAParams                   tiaParams_;
  bool                                  sensFlag_;
  bool                                  dcLoopInitialized_;
  int                                   dcLoopSize_;
  int                                   numSensParams_;
  std::vector<int>                      dcSweepFailures_;
  SweepVector                           dcSweepVector_;
  std::vector<double>                   objectiveVec_;
  std::vector<double>                   dOdpVec_;
  std::vector<double>                   dOdpAdjVec_;
  std::vector<double>                   scaled_dOdpVec_;
  std::vector<double>                   scaled_dOdpAdjVec_;

  std::map< std::string, std::vector<std::string> > dataNamesMap_;
  std::map< std::string, std::vector< std::vector<double> > > dataTablesMap_;

  std::vector < AnalysisBase * > parentAnalysisPtrVec_;
};

bool registerDCSweepFactory(FactoryBlock &factory_block);

} // namespace Analysis
} // namespace Xyce

#endif
