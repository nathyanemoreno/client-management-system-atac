import type express from 'express';
import { Send } from 'express-serve-static-core';

export interface TypedRequestBody<ReqBody> extends express.Request {
  body: ReqBody;
}

export interface TypedRequestQuery<ReqQuery extends {}>
  extends express.Request {
  query: ReqQuery;
}

export interface TypedRequest<ReqQuery extends {}, ReqBody>
  extends express.Request {
  body: ReqBody;
  query: ReqQuery;
}

export interface TypedResponse<ResBody> extends express.Response {
  json: Send<ResBody, this>;
}
