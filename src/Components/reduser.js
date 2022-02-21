const result = (state, action) => {
    switch (action.type) {
        case 'add':
            return action.payload

        case 'back':
            return action.payload

            case'result':
            return action.payload
        default:
            return state
    }

}

export default result