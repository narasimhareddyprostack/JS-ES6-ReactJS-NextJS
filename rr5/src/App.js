import React from 'react'
import Product from './product/Product';
import {Provider} from 'react-redux'
import { store } from './redux/store';
const App = () => {
  return <div>
          <Provider store={store}>
              <h3>App Component</h3>
              <hr/>
              <Product />
            </Provider>
         </div>
}

export default App