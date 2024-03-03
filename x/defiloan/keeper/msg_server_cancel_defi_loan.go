package keeper

import (
	"context"

	errorsmod "cosmossdk.io/errors"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CancelDefiLoan(goCtx context.Context, msg *types.MsgCancelDefiLoan) (*types.MsgCancelDefiLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	loan, found := k.GetDefiLoan(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "Not found the key")

	}
	
	if msg.Creator != loan.Borrower {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Not have unauthorized")
	}

	if loan.State != "requested" {
		return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
	}

	borrower, _ := sdk.AccAddressFromBech32(loan.Borrower)
    collateral, _ := sdk.ParseCoinsNormalized(loan.Collaterall)
    err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, borrower, collateral)
    if err != nil {
        return nil, err
    }
	loan.State = "cancelled"
    k.SetDefiLoan(ctx, loan)
	// TODO: Handling the message
	_ = ctx

	return &types.MsgCancelDefiLoanResponse{}, nil
}
