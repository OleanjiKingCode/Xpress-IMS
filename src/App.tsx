import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { getThemeConfig } from "./theme.config";
import { ErrorPage } from "./error-page";
import { Inventory } from "./features/Inventory/Inventory";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inventory />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <ConfigProvider theme={getThemeConfig()}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
