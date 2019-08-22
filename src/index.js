import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import ProductList from './ProductList';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

/* for counter, uncomment */
const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);

    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'RESET' });

// class App extends React.Component {
//     render() {
//         console.log('store', store);
//         return (
//             <div>
//                 <Counter/>
//             </div>
//         )
//     }
// }
const App = () => (
    <Provider store={store}>
        <Counter />
        {/* <ProductList /> */}
    </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'));
