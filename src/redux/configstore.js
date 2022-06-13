
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import post from "./modules/post"
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
export const history = createBrowserHistory(); 
const rootReducer = combineReducers({
  post
});
// middleware
// const middlewares = [thunk.withExtraArgument({ history: history })];
// redux dev-tools
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

    // const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// store
const store = createStore(rootReducer);
export default store;