package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		DefiLoanList: []DefiLoan{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in defiLoan
	defiLoanIdMap := make(map[uint64]bool)
	defiLoanCount := gs.GetDefiLoanCount()
	for _, elem := range gs.DefiLoanList {
		if _, ok := defiLoanIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for defiLoan")
		}
		if elem.Id >= defiLoanCount {
			return fmt.Errorf("defiLoan id should be lower or equal than the last id")
		}
		defiLoanIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
