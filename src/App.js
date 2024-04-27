import './App.css';
import FindDoctors from './Components/FindDoctors';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import MyBooking from './Components/MyBooking';
import { MyProvider } from './Components/MyContext1';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/findDoctor",
      element: <FindDoctors />,
    },
    {
      path: "/booking",
      element: <MyBooking />,
    },
  ]);
  return (
    <MyProvider>
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </MyProvider>
  );
}

export default App;
