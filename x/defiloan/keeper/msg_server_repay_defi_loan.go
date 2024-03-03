package keeper

import (
	"context"

	errorsmod "cosmossdk.io/errors"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) RepayDefiLoan(goCtx context.Context, msg *types.MsgRepayDefiLoan) (*types.MsgRepayDefiLoanResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	loan, found := k.GetDefiLoan(ctx, msg.Id)
	if !found  {
		return  nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "key %d doesn't exist", msg.Id)
	}
	if loan.State != "approved" {
		return nil, errorsmod.Wrapf(types.ErrWrongLoanState, "%v", loan.State)
	}
	lender, _ := sdk.AccAddressFromBech32(loan.Lender)
	borrower, _ := sdk.AccAddressFromBech32(loan.Borrower)
	
	if loan.Borrower != msg.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Cannot repay: not the borrower")
	}
	amount, _ := sdk.ParseCoinsNormalized(loan.Amount)
	fee, _ := sdk.ParseCoinsNormalized(loan.Fee)
	collaterall, _ := sdk.ParseCoinsNormalized(loan.Collaterall)
	err := k.bankKeeper.SendCoins(ctx, borrower, lender, amount )
	if err != nil {
        return nil, err
    }
	err = k.bankKeeper.SendCoins(ctx, borrower, lender, fee )
	if err != nil {
        return nil, err
    }
	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, borrower, collaterall)
	if err != nil {
        return nil, err
    }
	loan.State = "repayed"
	k.SetDefiLoan(ctx, loan)
	return &types.MsgRepayDefiLoanResponse{}, nil
	// TODO: Handling the message
	_ = ctx

	return &types.MsgRepayDefiLoanResponse{}, nil
}
