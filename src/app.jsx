import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { HelmetProvider } from "react-helmet-async"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SearchContextProvider } from "./context/SearchContext"
import { AuthContextProvider } from "./context/AuthContext"

import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./features/auth/Login"
import Register from "./features/auth/Register"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/:userId' element={<Dashboard />} />
      </Route>
    )
  )

  const queryClient  = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AuthContextProvider>
          <SearchContextProvider>
            <HelmetProvider>
             <RouterProvider router={router} /> 
            </HelmetProvider>
          </SearchContextProvider>
        </AuthContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </QueryClientProvider>
        
    </>
  )
}

export default App