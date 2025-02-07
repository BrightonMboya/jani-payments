/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

import "sst"
declare module "sst" {
  export interface Resource {
    "Bus": {
      "arn": string
      "name": string
      "type": "sst.aws.Bus"
    }
    "DATABASE_URL": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "DeadLetterQueu": {
      "type": "sst.aws.Queue"
      "url": string
    }
    "Hono": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "busDlq": {
      "type": "sst.aws.Queue"
      "url": string
    }
    "router": {
      "type": "sst.aws.Router"
      "url": string
    }
  }
}

import "sst"
export {}