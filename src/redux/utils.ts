import { _FAILURE, _SUCCESS } from "./constants";

export function getSuccessType(type) {
  return type + _SUCCESS;
}

export function getFailureType(type) {
  return type + _FAILURE;
}
