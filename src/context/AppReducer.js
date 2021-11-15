export default (state, action)=>{
switch (action.type) {
    case 'ADD-TRANSACTION':
        return {
            ...state,
            transactions:[action.payload, ...state.transactions]
        }
        case 'DEL-TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

    default:
        return state;
}
}