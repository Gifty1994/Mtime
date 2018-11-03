var cityidreducer = (prevState = 290, action) => {
    var type = action.type;

    switch (type) {
        case "copyid":
            return action.payload;
        default:
            return prevState;
    }
}

export default cityidreducer;