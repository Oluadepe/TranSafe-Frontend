import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import Home from "./Pages/Home"
import Faqs from "./Pages/Faqs";
import About from "./Pages/About";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route index element={<Home />} />
  <Route path="faqs" element={<Faqs />} />
  <Route path="about" element={<About />} />

  </Route>

))

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
