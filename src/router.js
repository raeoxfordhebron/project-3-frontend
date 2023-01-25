import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader, showLoader } from "./loaders"
import { createAction, updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
<<<<<<< HEAD
      <Route path="" element={<Index />} loader={indexLoader} />
      <Route path=":id" element={<Show />} loader={showLoader} />
      <Route path="create" />
      <Route path="update/:id" />
      <Route path="delete/:id" />
=======
      <Route path="" element={<Index />} loader={indexLoader}/>
      <Route path=":id" element={<Show />} loader={showLoader}/>
      <Route path="create" action={createAction}/>
      <Route path="update/:id" action={updateAction}/>
      <Route path="delete/:id" action={deleteAction}/>
>>>>>>> 323f510dfa153e0cf015f61af176e259ff53ccbb
    </Route>
  )
)

export default router
