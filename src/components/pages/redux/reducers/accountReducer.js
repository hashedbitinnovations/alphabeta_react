import { AccountActionTypes } from "../constants/accountConstants";

const initialAccountState = {
    balance: 0,
    numTrn: 0,
    showBalance: false
}


export const accountReducer = (state= initialAccountState, {type, payload}) => {
    switch (type) {
        case 'WITHDRAW5000':
            return {
                balance: state.balance - 5000,
                numTrn: state.numTrn + 1,
                showBalance: state.showBalance
            }
        case 'WITHDRAW10000':
            return {
                balance: state.balance - 10000,
                numTrn: state.numTrn + 1,
                showBalance: state.showBalance
            }

        case 'DEPOSIT5000':
            return {
                balance: state.balance + 5000,
                numTrn: state.numTrn + 1,
                showBalance: state.showBalance
            }

        case 'DEPOSIT10000':
            return {
                balance: state.balance + 10000,
                numTrn: state.numTrn + 1,
                showBalance: state.showBalance
            }

        case 'SHOWBALANCE':
            return {
                balance: state.balance,
                numTrn: state.numTrn,
                showBalance: true
            }

        case 'HIDEBALANCE':
            return {
                balance: state.balance,
                numTrn: state.numTrn,
                showBalance: false
            }

        default:
            return state;
    }
}