/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Cellid = string;
export type Showtable = boolean;

export interface ShowTableRequest {
  cellId: Cellid;
  showTable: Showtable;
  [k: string]: unknown;
}
