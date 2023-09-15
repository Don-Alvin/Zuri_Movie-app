import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./Pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import Dashboard from "./Pages/Dashboard"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SearchContextProvider } from "./Context/SearchContext"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Home />} />
          <Route path='/movie/:movieId' element={<Dashboard />} />
      </Route>
    )
  )

  const queryClient  = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
          <SearchContextProvider>
            <RouterProvider router={router} />
          </SearchContextProvider>
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