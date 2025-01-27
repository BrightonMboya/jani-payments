/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../funcs/customersCreate.js";
import { customersGet } from "../funcs/customersGet.js";
import { customersList } from "../funcs/customersList.js";
import { customersUpdate } from "../funcs/customersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Customers extends ClientSDK {
  async list(
    options?: RequestOptions,
  ): Promise<Array<operations.CustomersListResponseBody>> {
    return unwrapAsync(customersList(
      this,
      options,
    ));
  }

  async create(
    request: operations.CustomersCreateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.CustomersCreateResponseBody> {
    return unwrapAsync(customersCreate(
      this,
      request,
      options,
    ));
  }

  async get(
    request: operations.CustomersGetRequest,
    options?: RequestOptions,
  ): Promise<operations.CustomersGetResponseBody> {
    return unwrapAsync(customersGet(
      this,
      request,
      options,
    ));
  }

  async update(
    request: operations.CustomersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.CustomersUpdateResponseBody> {
    return unwrapAsync(customersUpdate(
      this,
      request,
      options,
    ));
  }
}
