package types_test

import (
	"testing"

	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				DefiLoanList: []types.DefiLoan{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				DefiLoanCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated defiLoan",
			genState: &types.GenesisState{
				DefiLoanList: []types.DefiLoan{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid defiLoan count",
			genState: &types.GenesisState{
				DefiLoanList: []types.DefiLoan{
					{
						Id: 1,
					},
				},
				DefiLoanCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
