package keeper_test

import (
	"testing"

	keepertest "github.com/QuyYeuCode/Defi-Loan/testutil/keeper"
	"github.com/QuyYeuCode/Defi-Loan/testutil/nullify"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/keeper"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNDefiLoan(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DefiLoan {
	items := make([]types.DefiLoan, n)
	for i := range items {
		items[i].Id = keeper.AppendDefiLoan(ctx, items[i])
	}
	return items
}

func TestDefiLoanGet(t *testing.T) {
	keeper, ctx := keepertest.DefiloanKeeper(t)
	items := createNDefiLoan(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDefiLoan(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDefiLoanRemove(t *testing.T) {
	keeper, ctx := keepertest.DefiloanKeeper(t)
	items := createNDefiLoan(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDefiLoan(ctx, item.Id)
		_, found := keeper.GetDefiLoan(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDefiLoanGetAll(t *testing.T) {
	keeper, ctx := keepertest.DefiloanKeeper(t)
	items := createNDefiLoan(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDefiLoan(ctx)),
	)
}

func TestDefiLoanCount(t *testing.T) {
	keeper, ctx := keepertest.DefiloanKeeper(t)
	items := createNDefiLoan(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDefiLoanCount(ctx))
}
