import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "./components/ui/provider";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard, { pokemonsLoader } from "./pages/Dashboard";
import Create, { createAction } from "./pages/Create";
import Profile from "./pages/Profile";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={pokemonsLoader} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
