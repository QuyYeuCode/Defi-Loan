package defiloan

import (
	"math/rand"

	"github.com/QuyYeuCode/Defi-Loan/testutil/sample"
	defiloansimulation "github.com/QuyYeuCode/Defi-Loan/x/defiloan/simulation"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = defiloansimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRequestDefiLoan = "op_weight_msg_request_defi_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRequestDefiLoan int = 100

	opWeightMsgApproveDefiLoan = "op_weight_msg_approve_defi_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApproveDefiLoan int = 100

	opWeightMsgRepayDefiLoan = "op_weight_msg_repay_defi_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRepayDefiLoan int = 100

	opWeightMsgLiquidateDefiLoan = "op_weight_msg_liquidate_defi_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgLiquidateDefiLoan int = 100

	opWeightMsgCancelDefiLoan = "op_weight_msg_cancel_defi_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelDefiLoan int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	defiloanGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&defiloanGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRequestDefiLoan int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRequestDefiLoan, &weightMsgRequestDefiLoan, nil,
		func(_ *rand.Rand) {
			weightMsgRequestDefiLoan = defaultWeightMsgRequestDefiLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRequestDefiLoan,
		defiloansimulation.SimulateMsgRequestDefiLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApproveDefiLoan int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgApproveDefiLoan, &weightMsgApproveDefiLoan, nil,
		func(_ *rand.Rand) {
			weightMsgApproveDefiLoan = defaultWeightMsgApproveDefiLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApproveDefiLoan,
		defiloansimulation.SimulateMsgApproveDefiLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRepayDefiLoan int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRepayDefiLoan, &weightMsgRepayDefiLoan, nil,
		func(_ *rand.Rand) {
			weightMsgRepayDefiLoan = defaultWeightMsgRepayDefiLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRepayDefiLoan,
		defiloansimulation.SimulateMsgRepayDefiLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgLiquidateDefiLoan int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgLiquidateDefiLoan, &weightMsgLiquidateDefiLoan, nil,
		func(_ *rand.Rand) {
			weightMsgLiquidateDefiLoan = defaultWeightMsgLiquidateDefiLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgLiquidateDefiLoan,
		defiloansimulation.SimulateMsgLiquidateDefiLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelDefiLoan int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancelDefiLoan, &weightMsgCancelDefiLoan, nil,
		func(_ *rand.Rand) {
			weightMsgCancelDefiLoan = defaultWeightMsgCancelDefiLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelDefiLoan,
		defiloansimulation.SimulateMsgCancelDefiLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
