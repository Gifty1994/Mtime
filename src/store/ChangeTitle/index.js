var titlereducer = (prevState = "北京", action) => {
    var type = action.type;

    switch (type) {
        case "changetitle":
            return action.payload;
        default:
            return prevState;
    }
}

export default titlereducer;