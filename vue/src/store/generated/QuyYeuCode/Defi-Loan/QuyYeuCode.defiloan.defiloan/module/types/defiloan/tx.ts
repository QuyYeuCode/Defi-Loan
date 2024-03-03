/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "QuyYeuCode.defiloan.defiloan";

export interface MsgRequestDefiLoan {
  creator: string;
  amount: string;
  fee: string;
  collateral: string;
  deadline: string;
}

export interface MsgRequestDefiLoanResponse {}

export interface MsgApproveDefiLoan {
  creator: string;
  id: number;
}

export interface MsgApproveDefiLoanResponse {}

export interface MsgRepayDefiLoan {
  creator: string;
  id: number;
}

export interface MsgRepayDefiLoanResponse {}

export interface MsgLiquidateDefiLoan {
  creator: string;
  id: number;
}

export interface MsgLiquidateDefiLoanResponse {}

export interface MsgCancelDefiLoan {
  creator: string;
  id: number;
}

export interface MsgCancelDefiLoanResponse {}

const baseMsgRequestDefiLoan: object = {
  creator: "",
  amount: "",
  fee: "",
  collateral: "",
  deadline: "",
};

export const MsgRequestDefiLoan = {
  encode(
    message: MsgRequestDefiLoan,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    if (message.collateral !== "") {
      writer.uint32(34).string(message.collateral);
    }
    if (message.deadline !== "") {
      writer.uint32(42).string(message.deadline);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestDefiLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestDefiLoan } as MsgRequestDefiLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        case 4:
          message.collateral = reader.string();
          break;
        case 5:
          message.deadline = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestDefiLoan {
    const message = { ...baseMsgRequestDefiLoan } as MsgRequestDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = String(object.collateral);
    } else {
      message.collateral = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = String(object.deadline);
    } else {
      message.deadline = "";
    }
    return message;
  },

  toJSON(message: MsgRequestDefiLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.collateral !== undefined && (obj.collateral = message.collateral);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRequestDefiLoan>): MsgRequestDefiLoan {
    const message = { ...baseMsgRequestDefiLoan } as MsgRequestDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    } else {
      message.collateral = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = "";
    }
    return message;
  },
};

const baseMsgRequestDefiLoanResponse: object = {};

export const MsgRequestDefiLoanResponse = {
  encode(
    _: MsgRequestDefiLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestDefiLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestDefiLoanResponse,
    } as MsgRequestDefiLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRequestDefiLoanResponse {
    const message = {
      ...baseMsgRequestDefiLoanResponse,
    } as MsgRequestDefiLoanResponse;
    return message;
  },

  toJSON(_: MsgRequestDefiLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRequestDefiLoanResponse>
  ): MsgRequestDefiLoanResponse {
    const message = {
      ...baseMsgRequestDefiLoanResponse,
    } as MsgRequestDefiLoanResponse;
    return message;
  },
};

const baseMsgApproveDefiLoan: object = { creator: "", id: 0 };

export const MsgApproveDefiLoan = {
  encode(
    message: MsgApproveDefiLoan,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveDefiLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveDefiLoan } as MsgApproveDefiLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveDefiLoan {
    const message = { ...baseMsgApproveDefiLoan } as MsgApproveDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgApproveDefiLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApproveDefiLoan>): MsgApproveDefiLoan {
    const message = { ...baseMsgApproveDefiLoan } as MsgApproveDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgApproveDefiLoanResponse: object = {};

export const MsgApproveDefiLoanResponse = {
  encode(
    _: MsgApproveDefiLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgApproveDefiLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgApproveDefiLoanResponse,
    } as MsgApproveDefiLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgApproveDefiLoanResponse {
    const message = {
      ...baseMsgApproveDefiLoanResponse,
    } as MsgApproveDefiLoanResponse;
    return message;
  },

  toJSON(_: MsgApproveDefiLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgApproveDefiLoanResponse>
  ): MsgApproveDefiLoanResponse {
    const message = {
      ...baseMsgApproveDefiLoanResponse,
    } as MsgApproveDefiLoanResponse;
    return message;
  },
};

const baseMsgRepayDefiLoan: object = { creator: "", id: 0 };

export const MsgRepayDefiLoan = {
  encode(message: MsgRepayDefiLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRepayDefiLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayDefiLoan } as MsgRepayDefiLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepayDefiLoan {
    const message = { ...baseMsgRepayDefiLoan } as MsgRepayDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgRepayDefiLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRepayDefiLoan>): MsgRepayDefiLoan {
    const message = { ...baseMsgRepayDefiLoan } as MsgRepayDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgRepayDefiLoanResponse: object = {};

export const MsgRepayDefiLoanResponse = {
  encode(
    _: MsgRepayDefiLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRepayDefiLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRepayDefiLoanResponse,
    } as MsgRepayDefiLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRepayDefiLoanResponse {
    const message = {
      ...baseMsgRepayDefiLoanResponse,
    } as MsgRepayDefiLoanResponse;
    return message;
  },

  toJSON(_: MsgRepayDefiLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRepayDefiLoanResponse>
  ): MsgRepayDefiLoanResponse {
    const message = {
      ...baseMsgRepayDefiLoanResponse,
    } as MsgRepayDefiLoanResponse;
    return message;
  },
};

const baseMsgLiquidateDefiLoan: object = { creator: "", id: 0 };

export const MsgLiquidateDefiLoan = {
  encode(
    message: MsgLiquidateDefiLoan,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLiquidateDefiLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidateDefiLoan } as MsgLiquidateDefiLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateDefiLoan {
    const message = { ...baseMsgLiquidateDefiLoan } as MsgLiquidateDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgLiquidateDefiLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLiquidateDefiLoan>): MsgLiquidateDefiLoan {
    const message = { ...baseMsgLiquidateDefiLoan } as MsgLiquidateDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgLiquidateDefiLoanResponse: object = {};

export const MsgLiquidateDefiLoanResponse = {
  encode(
    _: MsgLiquidateDefiLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLiquidateDefiLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateDefiLoanResponse,
    } as MsgLiquidateDefiLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateDefiLoanResponse {
    const message = {
      ...baseMsgLiquidateDefiLoanResponse,
    } as MsgLiquidateDefiLoanResponse;
    return message;
  },

  toJSON(_: MsgLiquidateDefiLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidateDefiLoanResponse>
  ): MsgLiquidateDefiLoanResponse {
    const message = {
      ...baseMsgLiquidateDefiLoanResponse,
    } as MsgLiquidateDefiLoanResponse;
    return message;
  },
};

const baseMsgCancelDefiLoan: object = { creator: "", id: 0 };

export const MsgCancelDefiLoan = {
  encode(message: MsgCancelDefiLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelDefiLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelDefiLoan } as MsgCancelDefiLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelDefiLoan {
    const message = { ...baseMsgCancelDefiLoan } as MsgCancelDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCancelDefiLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelDefiLoan>): MsgCancelDefiLoan {
    const message = { ...baseMsgCancelDefiLoan } as MsgCancelDefiLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCancelDefiLoanResponse: object = {};

export const MsgCancelDefiLoanResponse = {
  encode(
    _: MsgCancelDefiLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelDefiLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelDefiLoanResponse,
    } as MsgCancelDefiLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelDefiLoanResponse {
    const message = {
      ...baseMsgCancelDefiLoanResponse,
    } as MsgCancelDefiLoanResponse;
    return message;
  },

  toJSON(_: MsgCancelDefiLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelDefiLoanResponse>
  ): MsgCancelDefiLoanResponse {
    const message = {
      ...baseMsgCancelDefiLoanResponse,
    } as MsgCancelDefiLoanResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestDefiLoan(
    request: MsgRequestDefiLoan
  ): Promise<MsgRequestDefiLoanResponse>;
  ApproveDefiLoan(
    request: MsgApproveDefiLoan
  ): Promise<MsgApproveDefiLoanResponse>;
  RepayDefiLoan(request: MsgRepayDefiLoan): Promise<MsgRepayDefiLoanResponse>;
  LiquidateDefiLoan(
    request: MsgLiquidateDefiLoan
  ): Promise<MsgLiquidateDefiLoanResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CancelDefiLoan(
    request: MsgCancelDefiLoan
  ): Promise<MsgCancelDefiLoanResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RequestDefiLoan(
    request: MsgRequestDefiLoan
  ): Promise<MsgRequestDefiLoanResponse> {
    const data = MsgRequestDefiLoan.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Msg",
      "RequestDefiLoan",
      data
    );
    return promise.then((data) =>
      MsgRequestDefiLoanResponse.decode(new Reader(data))
    );
  }

  ApproveDefiLoan(
    request: MsgApproveDefiLoan
  ): Promise<MsgApproveDefiLoanResponse> {
    const data = MsgApproveDefiLoan.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Msg",
      "ApproveDefiLoan",
      data
    );
    return promise.then((data) =>
      MsgApproveDefiLoanResponse.decode(new Reader(data))
    );
  }

  RepayDefiLoan(request: MsgRepayDefiLoan): Promise<MsgRepayDefiLoanResponse> {
    const data = MsgRepayDefiLoan.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Msg",
      "RepayDefiLoan",
      data
    );
    return promise.then((data) =>
      MsgRepayDefiLoanResponse.decode(new Reader(data))
    );
  }

  LiquidateDefiLoan(
    request: MsgLiquidateDefiLoan
  ): Promise<MsgLiquidateDefiLoanResponse> {
    const data = MsgLiquidateDefiLoan.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Msg",
      "LiquidateDefiLoan",
      data
    );
    return promise.then((data) =>
      MsgLiquidateDefiLoanResponse.decode(new Reader(data))
    );
  }

  CancelDefiLoan(
    request: MsgCancelDefiLoan
  ): Promise<MsgCancelDefiLoanResponse> {
    const data = MsgCancelDefiLoan.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Msg",
      "CancelDefiLoan",
      data
    );
    return promise.then((data) =>
      MsgCancelDefiLoanResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
