package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgApproveDefiLoan = "approve_defi_loan"

var _ sdk.Msg = &MsgApproveDefiLoan{}

func NewMsgApproveDefiLoan(creator string, id uint64) *MsgApproveDefiLoan {
	return &MsgApproveDefiLoan{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgApproveDefiLoan) Route() string {
	return RouterKey
}

func (msg *MsgApproveDefiLoan) Type() string {
	return TypeMsgApproveDefiLoan
}

func (msg *MsgApproveDefiLoan) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgApproveDefiLoan) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgApproveDefiLoan) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
