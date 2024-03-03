package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/QuyYeuCode/Defi-Loan/testutil/keeper"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/keeper"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DefiloanKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
