package keeper

import (
	"encoding/binary"

	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDefiLoanCount get the total number of defiLoan
func (k Keeper) GetDefiLoanCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DefiLoanCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDefiLoanCount set the total number of defiLoan
func (k Keeper) SetDefiLoanCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DefiLoanCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDefiLoan appends a defiLoan in the store with a new id and update the count
func (k Keeper) AppendDefiLoan(
	ctx sdk.Context,
	defiLoan types.DefiLoan,
) uint64 {
	// Create the defiLoan
	count := k.GetDefiLoanCount(ctx)

	// Set the ID of the appended value
	defiLoan.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefiLoanKey))
	appendedValue := k.cdc.MustMarshal(&defiLoan)
	store.Set(GetDefiLoanIDBytes(defiLoan.Id), appendedValue)

	// Update defiLoan count
	k.SetDefiLoanCount(ctx, count+1)

	return count
}

// SetDefiLoan set a specific defiLoan in the store
func (k Keeper) SetDefiLoan(ctx sdk.Context, defiLoan types.DefiLoan) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefiLoanKey))
	b := k.cdc.MustMarshal(&defiLoan)
	store.Set(GetDefiLoanIDBytes(defiLoan.Id), b)
}

// GetDefiLoan returns a defiLoan from its id
func (k Keeper) GetDefiLoan(ctx sdk.Context, id uint64) (val types.DefiLoan, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefiLoanKey))
	b := store.Get(GetDefiLoanIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDefiLoan removes a defiLoan from the store
func (k Keeper) RemoveDefiLoan(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefiLoanKey))
	store.Delete(GetDefiLoanIDBytes(id))
}

// GetAllDefiLoan returns all defiLoan
func (k Keeper) GetAllDefiLoan(ctx sdk.Context) (list []types.DefiLoan) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefiLoanKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DefiLoan
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDefiLoanIDBytes returns the byte representation of the ID
func GetDefiLoanIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDefiLoanIDFromBytes returns ID in uint64 format from a byte array
func GetDefiLoanIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
