import { createStore } from 'redux'
import rootReducer, { getInitialState }  from 'scripts/reducers'

export default function configureStore(){
    const store =  createStore(
        rootReducer,
        getInitialState(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('scripts/reducers/index', () => {
            const nextRootReducer = require('scripts/reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store
}