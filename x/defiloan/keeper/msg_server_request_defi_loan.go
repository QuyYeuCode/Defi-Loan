package keeper

import (
	"context"

	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RequestDefiLoan(goCtx context.Context, msg *types.MsgRequestDefiLoan) (*types.MsgRequestDefiLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	defiloan := types.DefiLoan {
		Amount:     msg.Amount,
        Fee:        msg.Fee,
        Collaterall: msg.Collateral,
        Deadline:   msg.Deadline,
        State:      "requested",
        Borrower:   msg.Creator,
	}
	borrower, err := sdk.AccAddressFromBech32(msg.Creator)
    if err != nil {
        panic(err)
    }
	collateral, err := sdk.ParseCoinsNormalized(defiloan.Collaterall)
    if err != nil {
        panic(err)
    }
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, borrower, types.ModuleName, collateral)
    if sdkError != nil {
        return nil, sdkError
    }
	k.AppendDefiLoan(ctx, defiloan)
    return &types.MsgRequestDefiLoanResponse{}, nil
	_ = ctx

	return &types.MsgRequestDefiLoanResponse{}, nil
}
