/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionGetSubscription } from "../funcs/subscriptionGetSubscription.js";
import { subscriptionPatchSubscriptionSubscriptionId } from "../funcs/subscriptionPatchSubscriptionSubscriptionId.js";
import { subscriptionPostSubscription } from "../funcs/subscriptionPostSubscription.js";
import { subscriptionPostSubscriptionSubscriptionIdActivate } from "../funcs/subscriptionPostSubscriptionSubscriptionIdActivate.js";
import { subscriptionPostSubscriptionSubscriptionIdCancel } from "../funcs/subscriptionPostSubscriptionSubscriptionIdCancel.js";
import { subscriptionPostSubscriptionSubscriptionIdPause } from "../funcs/subscriptionPostSubscriptionSubscriptionIdPause.js";
import { subscriptionPostSubscriptionSubscriptionIdResume } from "../funcs/subscriptionPostSubscriptionSubscriptionIdResume.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Subscription extends ClientSDK {
  async postSubscription(
    request?: operations.PostSubscriptionRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostSubscriptionResponseBody> {
    return unwrapAsync(subscriptionPostSubscription(
      this,
      request,
      options,
    ));
  }

  async getSubscription(
    options?: RequestOptions,
  ): Promise<Array<operations.GetSubscriptionResponseBody>> {
    return unwrapAsync(subscriptionGetSubscription(
      this,
      options,
    ));
  }

  async postSubscriptionSubscriptionIdCancel(
    request: operations.PostSubscriptionSubscriptionIdCancelRequest,
    options?: RequestOptions,
  ): Promise<operations.PostSubscriptionSubscriptionIdCancelResponseBody> {
    return unwrapAsync(subscriptionPostSubscriptionSubscriptionIdCancel(
      this,
      request,
      options,
    ));
  }

  async postSubscriptionSubscriptionIdPause(
    request: operations.PostSubscriptionSubscriptionIdPauseRequest,
    options?: RequestOptions,
  ): Promise<operations.PostSubscriptionSubscriptionIdPauseResponseBody> {
    return unwrapAsync(subscriptionPostSubscriptionSubscriptionIdPause(
      this,
      request,
      options,
    ));
  }

  async postSubscriptionSubscriptionIdResume(
    request: operations.PostSubscriptionSubscriptionIdResumeRequest,
    options?: RequestOptions,
  ): Promise<operations.PostSubscriptionSubscriptionIdResumeResponseBody> {
    return unwrapAsync(subscriptionPostSubscriptionSubscriptionIdResume(
      this,
      request,
      options,
    ));
  }

  async postSubscriptionSubscriptionIdActivate(
    request: operations.PostSubscriptionSubscriptionIdActivateRequest,
    options?: RequestOptions,
  ): Promise<operations.PostSubscriptionSubscriptionIdActivateResponseBody> {
    return unwrapAsync(subscriptionPostSubscriptionSubscriptionIdActivate(
      this,
      request,
      options,
    ));
  }

  async patchSubscriptionSubscriptionId(
    request: operations.PatchSubscriptionSubscriptionIdRequest,
    options?: RequestOptions,
  ): Promise<operations.PatchSubscriptionSubscriptionIdResponseBody> {
    return unwrapAsync(subscriptionPatchSubscriptionSubscriptionId(
      this,
      request,
      options,
    ));
  }
}
