package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLiquidateDefiLoan = "liquidate_defi_loan"

var _ sdk.Msg = &MsgLiquidateDefiLoan{}

func NewMsgLiquidateDefiLoan(creator string, id uint64) *MsgLiquidateDefiLoan {
	return &MsgLiquidateDefiLoan{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgLiquidateDefiLoan) Route() string {
	return RouterKey
}

func (msg *MsgLiquidateDefiLoan) Type() string {
	return TypeMsgLiquidateDefiLoan
}

func (msg *MsgLiquidateDefiLoan) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgLiquidateDefiLoan) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgLiquidateDefiLoan) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
