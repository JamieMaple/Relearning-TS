/// <reference path="./modules.d.ts" />
import * as modules from './modules-1'
import classNames from './test.css!text'

export class ZipCodeValidator implements modules.StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && modules.numberRegexp.test(s)
  }
}
