import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";
import "./App.scss";
import { HeaderContent } from "./shared/components/HeaderContent/HeaderContent";
import { Provider } from "react-redux";
import { appStore, persistor } from "./utils/appStore/appStore";
import Browse from "./components/Browse/Browse";
import PublicRoute from "./shared/components/Public/Public";
import ProtectedRoute from "./shared/components/Protected/Protected";
import { PersistGate } from "redux-persist/integration/react";

const AppLayout: React.FC = () => (
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistor}>
      <div className="app-container">
        <div className="bg-img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg"
            alt="bg-img"
          />
        </div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </PersistGate>
  </Provider>
);

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <PublicRoute element={<HeaderContent />} />,
        },
        {
          path: "/login",
          element: <PublicRoute element={<Login />} />,
        },
        {
          path: "signup",
          element: <PublicRoute element={<Login />} />,
        },
        {
          path: "browse",
          element: <ProtectedRoute element={<Browse />} />,
          children: [
            {
              path: "gpt-movies",
              element: <ProtectedRoute element={<Browse />} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
