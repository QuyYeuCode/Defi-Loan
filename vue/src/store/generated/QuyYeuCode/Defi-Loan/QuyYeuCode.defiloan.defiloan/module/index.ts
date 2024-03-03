// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRepayDefiLoan } from "./types/defiloan/tx";
import { MsgCancelDefiLoan } from "./types/defiloan/tx";
import { MsgLiquidateDefiLoan } from "./types/defiloan/tx";
import { MsgRequestDefiLoan } from "./types/defiloan/tx";
import { MsgApproveDefiLoan } from "./types/defiloan/tx";


const types = [
  ["/QuyYeuCode.defiloan.defiloan.MsgRepayDefiLoan", MsgRepayDefiLoan],
  ["/QuyYeuCode.defiloan.defiloan.MsgCancelDefiLoan", MsgCancelDefiLoan],
  ["/QuyYeuCode.defiloan.defiloan.MsgLiquidateDefiLoan", MsgLiquidateDefiLoan],
  ["/QuyYeuCode.defiloan.defiloan.MsgRequestDefiLoan", MsgRequestDefiLoan],
  ["/QuyYeuCode.defiloan.defiloan.MsgApproveDefiLoan", MsgApproveDefiLoan],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgRepayDefiLoan: (data: MsgRepayDefiLoan): EncodeObject => ({ typeUrl: "/QuyYeuCode.defiloan.defiloan.MsgRepayDefiLoan", value: MsgRepayDefiLoan.fromPartial( data ) }),
    msgCancelDefiLoan: (data: MsgCancelDefiLoan): EncodeObject => ({ typeUrl: "/QuyYeuCode.defiloan.defiloan.MsgCancelDefiLoan", value: MsgCancelDefiLoan.fromPartial( data ) }),
    msgLiquidateDefiLoan: (data: MsgLiquidateDefiLoan): EncodeObject => ({ typeUrl: "/QuyYeuCode.defiloan.defiloan.MsgLiquidateDefiLoan", value: MsgLiquidateDefiLoan.fromPartial( data ) }),
    msgRequestDefiLoan: (data: MsgRequestDefiLoan): EncodeObject => ({ typeUrl: "/QuyYeuCode.defiloan.defiloan.MsgRequestDefiLoan", value: MsgRequestDefiLoan.fromPartial( data ) }),
    msgApproveDefiLoan: (data: MsgApproveDefiLoan): EncodeObject => ({ typeUrl: "/QuyYeuCode.defiloan.defiloan.MsgApproveDefiLoan", value: MsgApproveDefiLoan.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
