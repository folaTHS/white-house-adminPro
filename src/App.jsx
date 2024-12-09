import { RouterProvider } from 'react-router-dom'
import router from './router'
import Suspend_Reason from './popUps/suspendReason/Suspend_Reason'
import Account_Suspended from './popUps/accountSuspended/Account_Suspended'
import Error from './popUps/error/Error'
// import { BetsApiProvider } from './pages/admin/api_detaills/GlobalStates/BetsContext'
import { Provider } from "react-redux";
import store from "./store"

function App() {


  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
