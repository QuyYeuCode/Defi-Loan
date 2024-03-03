package defiloan_test

import (
	"testing"

	keepertest "github.com/QuyYeuCode/Defi-Loan/testutil/keeper"
	"github.com/QuyYeuCode/Defi-Loan/testutil/nullify"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		DefiLoanList: []types.DefiLoan{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DefiLoanCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DefiloanKeeper(t)
	defiloan.InitGenesis(ctx, *k, genesisState)
	got := defiloan.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.DefiLoanList, got.DefiLoanList)
	require.Equal(t, genesisState.DefiLoanCount, got.DefiLoanCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
