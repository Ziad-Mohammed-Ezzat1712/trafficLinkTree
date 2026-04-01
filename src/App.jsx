import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/home/home';
import './App.css';
let x = createBrowserRouter([
{index : true,element:<Home/> },

]

)
function App() {
 

  return (
    <>
   <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
