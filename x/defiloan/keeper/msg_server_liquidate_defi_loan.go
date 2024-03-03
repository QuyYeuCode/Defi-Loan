package keeper

import (
	"context"
	"strconv"

	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)
func (k msgServer) LiquidateDefiLoan(goCtx context.Context, msg *types.MsgLiquidateDefiLoan) (*types.MsgLiquidateDefiLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	loan, found := k.GetDefiLoan(ctx, msg.Id)
	
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound,"key %d doesn't exist", msg.Id )
	}

	if msg.Creator != loan.Lender {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Cannot liquidate: not the lender")
	}
	
	if loan.State != "approved" {
		return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
	}

	lender, _ := sdk.AccAddressFromBech32(loan.Lender)
	collateral, _ := sdk.ParseCoinsNormalized(loan.Collaterall)
	deadline, err := strconv.ParseInt(loan.Deadline, 10, 64)
    if err != nil {
        panic(err)
    }

	if ctx.BlockHeight() < deadline {
		return nil, errorsmod.Wrap(types.ErrDeadline, "the time is over")
	}

	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, lender, collateral)
	if err != nil {
        return nil, err
    }
	loan.State = "liquidated"
	k.SetDefiLoan(ctx, loan)

	

	// TODO: Handling the message
	_ = ctx

	return &types.MsgLiquidateDefiLoanResponse{}, nil
}
