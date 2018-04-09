export const numberRegexp = /^[0-9]+$/

export interface StringValidator {
  isAcceptable(s: string): boolean;
}
