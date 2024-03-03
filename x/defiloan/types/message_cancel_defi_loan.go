package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCancelDefiLoan = "cancel_defi_loan"

var _ sdk.Msg = &MsgCancelDefiLoan{}

func NewMsgCancelDefiLoan(creator string, id uint64) *MsgCancelDefiLoan {
	return &MsgCancelDefiLoan{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgCancelDefiLoan) Route() string {
	return RouterKey
}

func (msg *MsgCancelDefiLoan) Type() string {
	return TypeMsgCancelDefiLoan
}

func (msg *MsgCancelDefiLoan) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCancelDefiLoan) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCancelDefiLoan) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
