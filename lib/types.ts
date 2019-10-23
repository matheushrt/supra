import * as http from "http";
import * as CircuitBreaker from "opossum";

interface HttpRequestOptions {
  method?: 'get' | 'post' | 'delete' | 'put';
  body?: string | object;
  json?: boolean;
  headers?: Record<string, string>;
}

interface RequestOptions extends CircuitBreaker.Options, HttpRequestOptions {
  timeout?: number;
}

interface ClientResponse {
  body: string;
  json: object;
  response: http.IncomingMessage
}


export {
  ClientResponse,
  HttpRequestOptions,
  RequestOptions
}
