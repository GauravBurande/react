import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducres from "./reducres";


export const store = createStore(reducres, {}, applyMiddleware(thunk))