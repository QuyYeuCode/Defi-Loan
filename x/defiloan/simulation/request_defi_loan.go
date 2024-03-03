package simulation

import (
	"math/rand"

	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/keeper"
	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgRequestDefiLoan(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgRequestDefiLoan{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the RequestDefiLoan simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "RequestDefiLoan simulation not implemented"), nil, nil
	}
}
