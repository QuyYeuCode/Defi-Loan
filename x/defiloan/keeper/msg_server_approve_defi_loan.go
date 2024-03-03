package keeper

import (
	"context"

	errorsmod "cosmossdk.io/errors"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveDefiLoan(goCtx context.Context, msg *types.MsgApproveDefiLoan) (*types.MsgApproveDefiLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
    loan, found := k.GetDefiLoan(ctx, msg.Id)
    if !found {
        return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "key %d doesn't exist", msg.Id)
    }
    if loan.State != "requested" {
        return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
    }
    lender, _ := sdk.AccAddressFromBech32(msg.Creator)
    borrower, _ := sdk.AccAddressFromBech32(loan.Borrower)
    amount, err := sdk.ParseCoinsNormalized(loan.Amount)
    if err != nil {
        return nil, errorsmod.Wrap(types.ErrWrongLoanState, "Cannot parse coins in loan amount")
    }
    err = k.bankKeeper.SendCoins(ctx, lender, borrower, amount)
    if err != nil {
        return nil, err
    }
    loan.Lender = msg.Creator
    loan.State = "approved"
    k.SetDefiLoan(ctx, loan)
	// TODO: Handling the message
	_ = ctx

	return &types.MsgApproveDefiLoanResponse{}, nil
}
