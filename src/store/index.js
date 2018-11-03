import { createStore, combineReducers} from "redux";
import cityidreducer from "./CopyId";
import titlereducer from "./ChangeTitle";
import { persistStore, autoRehydrate} from 'redux-persist';

var reducer = combineReducers({
    myTitle: titlereducer,
    myId: cityidreducer
})

const store = createStore(reducer);

persistStore(store)

export default store;