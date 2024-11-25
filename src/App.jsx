import { RouterProvider } from 'react-router-dom'
import router from './router'
import Suspend_Reason from './popUps/suspendReason/Suspend_Reason'
import Account_Suspended from './popUps/accountSuspended/Account_Suspended'
import Error from './popUps/error/Error'




function App() {


  return (
    <>
    
      <RouterProvider router={router} />

    </>
  )
}

export default App
