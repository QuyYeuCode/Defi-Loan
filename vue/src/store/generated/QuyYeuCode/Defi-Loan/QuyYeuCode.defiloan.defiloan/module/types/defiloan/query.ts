/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../defiloan/params";
import { DefiLoan } from "../defiloan/defi_loan";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "QuyYeuCode.defiloan.defiloan";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetDefiLoanRequest {
  id: number;
}

export interface QueryGetDefiLoanResponse {
  DefiLoan: DefiLoan | undefined;
}

export interface QueryAllDefiLoanRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDefiLoanResponse {
  DefiLoan: DefiLoan[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetDefiLoanRequest: object = { id: 0 };

export const QueryGetDefiLoanRequest = {
  encode(
    message: QueryGetDefiLoanRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDefiLoanRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDefiLoanRequest,
    } as QueryGetDefiLoanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDefiLoanRequest {
    const message = {
      ...baseQueryGetDefiLoanRequest,
    } as QueryGetDefiLoanRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDefiLoanRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDefiLoanRequest>
  ): QueryGetDefiLoanRequest {
    const message = {
      ...baseQueryGetDefiLoanRequest,
    } as QueryGetDefiLoanRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDefiLoanResponse: object = {};

export const QueryGetDefiLoanResponse = {
  encode(
    message: QueryGetDefiLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DefiLoan !== undefined) {
      DefiLoan.encode(message.DefiLoan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDefiLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDefiLoanResponse,
    } as QueryGetDefiLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DefiLoan = DefiLoan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDefiLoanResponse {
    const message = {
      ...baseQueryGetDefiLoanResponse,
    } as QueryGetDefiLoanResponse;
    if (object.DefiLoan !== undefined && object.DefiLoan !== null) {
      message.DefiLoan = DefiLoan.fromJSON(object.DefiLoan);
    } else {
      message.DefiLoan = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDefiLoanResponse): unknown {
    const obj: any = {};
    message.DefiLoan !== undefined &&
      (obj.DefiLoan = message.DefiLoan
        ? DefiLoan.toJSON(message.DefiLoan)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDefiLoanResponse>
  ): QueryGetDefiLoanResponse {
    const message = {
      ...baseQueryGetDefiLoanResponse,
    } as QueryGetDefiLoanResponse;
    if (object.DefiLoan !== undefined && object.DefiLoan !== null) {
      message.DefiLoan = DefiLoan.fromPartial(object.DefiLoan);
    } else {
      message.DefiLoan = undefined;
    }
    return message;
  },
};

const baseQueryAllDefiLoanRequest: object = {};

export const QueryAllDefiLoanRequest = {
  encode(
    message: QueryAllDefiLoanRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDefiLoanRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDefiLoanRequest,
    } as QueryAllDefiLoanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDefiLoanRequest {
    const message = {
      ...baseQueryAllDefiLoanRequest,
    } as QueryAllDefiLoanRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDefiLoanRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDefiLoanRequest>
  ): QueryAllDefiLoanRequest {
    const message = {
      ...baseQueryAllDefiLoanRequest,
    } as QueryAllDefiLoanRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDefiLoanResponse: object = {};

export const QueryAllDefiLoanResponse = {
  encode(
    message: QueryAllDefiLoanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.DefiLoan) {
      DefiLoan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDefiLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDefiLoanResponse,
    } as QueryAllDefiLoanResponse;
    message.DefiLoan = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DefiLoan.push(DefiLoan.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDefiLoanResponse {
    const message = {
      ...baseQueryAllDefiLoanResponse,
    } as QueryAllDefiLoanResponse;
    message.DefiLoan = [];
    if (object.DefiLoan !== undefined && object.DefiLoan !== null) {
      for (const e of object.DefiLoan) {
        message.DefiLoan.push(DefiLoan.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDefiLoanResponse): unknown {
    const obj: any = {};
    if (message.DefiLoan) {
      obj.DefiLoan = message.DefiLoan.map((e) =>
        e ? DefiLoan.toJSON(e) : undefined
      );
    } else {
      obj.DefiLoan = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDefiLoanResponse>
  ): QueryAllDefiLoanResponse {
    const message = {
      ...baseQueryAllDefiLoanResponse,
    } as QueryAllDefiLoanResponse;
    message.DefiLoan = [];
    if (object.DefiLoan !== undefined && object.DefiLoan !== null) {
      for (const e of object.DefiLoan) {
        message.DefiLoan.push(DefiLoan.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a DefiLoan by id. */
  DefiLoan(request: QueryGetDefiLoanRequest): Promise<QueryGetDefiLoanResponse>;
  /** Queries a list of DefiLoan items. */
  DefiLoanAll(
    request: QueryAllDefiLoanRequest
  ): Promise<QueryAllDefiLoanResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  DefiLoan(
    request: QueryGetDefiLoanRequest
  ): Promise<QueryGetDefiLoanResponse> {
    const data = QueryGetDefiLoanRequest.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Query",
      "DefiLoan",
      data
    );
    return promise.then((data) =>
      QueryGetDefiLoanResponse.decode(new Reader(data))
    );
  }

  DefiLoanAll(
    request: QueryAllDefiLoanRequest
  ): Promise<QueryAllDefiLoanResponse> {
    const data = QueryAllDefiLoanRequest.encode(request).finish();
    const promise = this.rpc.request(
      "QuyYeuCode.defiloan.defiloan.Query",
      "DefiLoanAll",
      data
    );
    return promise.then((data) =>
      QueryAllDefiLoanResponse.decode(new Reader(data))
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
