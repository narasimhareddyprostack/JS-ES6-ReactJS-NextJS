import React from 'react'
import Message from './messages/Messge'
import {store} from './redux/store'
import {Provider} from 'react-redux'
const App = () => {
  return <div>
          <Provider store={store}>
            <h3>App Component</h3>
            <hr/>
            <Message/>
          </Provider>
        </div>
}

export default App