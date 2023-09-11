import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./Pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    )
  )

  const queryClient  = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
        
    </>
  )
}

export default App