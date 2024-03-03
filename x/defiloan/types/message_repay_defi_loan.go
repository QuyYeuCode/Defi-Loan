package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRepayDefiLoan = "repay_defi_loan"

var _ sdk.Msg = &MsgRepayDefiLoan{}

func NewMsgRepayDefiLoan(creator string, id uint64) *MsgRepayDefiLoan {
	return &MsgRepayDefiLoan{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgRepayDefiLoan) Route() string {
	return RouterKey
}

func (msg *MsgRepayDefiLoan) Type() string {
	return TypeMsgRepayDefiLoan
}

func (msg *MsgRepayDefiLoan) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRepayDefiLoan) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRepayDefiLoan) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
