package defiloan

import (
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/keeper"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the defiLoan
	for _, elem := range genState.DefiLoanList {
		k.SetDefiLoan(ctx, elem)
	}

	// Set defiLoan count
	k.SetDefiLoanCount(ctx, genState.DefiLoanCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.DefiLoanList = k.GetAllDefiLoan(ctx)
	genesis.DefiLoanCount = k.GetDefiLoanCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
