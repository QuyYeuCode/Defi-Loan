package cli

import (
	"context"
	"strconv"

	"github.com/QuyYeuCode/Defi-Loan/x/defiloan/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListDefiLoan() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-defi-loan",
		Short: "list all Defi-Loan",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllDefiLoanRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.DefiLoanAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowDefiLoan() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-defi-loan [id]",
		Short: "shows a Defi-Loan",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetDefiLoanRequest{
				Id: id,
			}

			res, err := queryClient.DefiLoan(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
