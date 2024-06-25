const initialState = {
    count: 0
}

const CounterReducer = (value = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            console.log("increment pressed")
            return {
                ...value,
                count: value.count + 1
            };
        case "DECREMENT":
            console.log("decrment pressed")
            return {
                ...value,
                count: value.count - 1
            };
        default:
            console.log("default pressed")
            return value
    }
}

export default CounterReducer;