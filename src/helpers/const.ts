export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const DECIMAL_REGEX = /^-?\d*\.?\d+$/

export const EMAIL_ERROR = 'INVALID_EMAIL'
export const DECIMAL_ERROR = 'DECIMAL_ERROR'

export type COMMON_ERROR = typeof EMAIL_ERROR | typeof DECIMAL_ERROR
