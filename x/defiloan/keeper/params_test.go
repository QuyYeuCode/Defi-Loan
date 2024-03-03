package keeper_test

import (
	"testing"

	testkeeper "github.com/QuyYeuCode/Defi-Loan/testutil/keeper"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DefiloanKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
