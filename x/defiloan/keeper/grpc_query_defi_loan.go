package keeper

import (
	"context"

	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DefiLoanAll(c context.Context, req *types.QueryAllDefiLoanRequest) (*types.QueryAllDefiLoanResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var defiLoans []types.DefiLoan
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	defiLoanStore := prefix.NewStore(store, types.KeyPrefix(types.DefiLoanKey))

	pageRes, err := query.Paginate(defiLoanStore, req.Pagination, func(key []byte, value []byte) error {
		var defiLoan types.DefiLoan
		if err := k.cdc.Unmarshal(value, &defiLoan); err != nil {
			return err
		}

		defiLoans = append(defiLoans, defiLoan)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDefiLoanResponse{DefiLoan: defiLoans, Pagination: pageRes}, nil
}

func (k Keeper) DefiLoan(c context.Context, req *types.QueryGetDefiLoanRequest) (*types.QueryGetDefiLoanResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	defiLoan, found := k.GetDefiLoan(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDefiLoanResponse{DefiLoan: defiLoan}, nil
}
