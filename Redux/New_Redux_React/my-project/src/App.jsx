// npm install redux react-redux 

import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HookContainer from './components/HookContainer'

function App() {

  return (
    <>
      <Provider store={store}>
      <HookContainer/>
        <CakeContainer/>
      </Provider>
    </>
  )
}

export default App
