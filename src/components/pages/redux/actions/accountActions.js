import { AccountActionTypes } from "../constants/accountConstants";

export const withdraw5000 = () => ({ type: 'WITHDRAW5000', payload: 5000 })
export const withdraw10000 = () => ({ type: 'WITHDRAW10000', payload: 10000 })
export const deposit5000 = () => ({ type: 'DEPOSIT5000', payload: 5000 })
export const deposit10000 = () => ({ type: 'DEPOSIT10000', payload: 10000 })
export const showbalance = () => ({ type: 'SHOWBALANCE' })
export const hidebalance = () => ({ type: 'HIDEBALANCE' })