import { DECIMAL_REGEX } from '../const'

const validator = (regex: RegExp) => (val: string) => regex.test(val)

export const isValidDecimal = validator(DECIMAL_REGEX)
