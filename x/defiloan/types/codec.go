package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRequestDefiLoan{}, "defiloan/RequestDefiLoan", nil)
	cdc.RegisterConcrete(&MsgApproveDefiLoan{}, "defiloan/ApproveDefiLoan", nil)
	cdc.RegisterConcrete(&MsgRepayDefiLoan{}, "defiloan/RepayDefiLoan", nil)
	cdc.RegisterConcrete(&MsgLiquidateDefiLoan{}, "defiloan/LiquidateDefiLoan", nil)
	cdc.RegisterConcrete(&MsgCancelDefiLoan{}, "defiloan/CancelDefiLoan", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRequestDefiLoan{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApproveDefiLoan{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRepayDefiLoan{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgLiquidateDefiLoan{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCancelDefiLoan{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
