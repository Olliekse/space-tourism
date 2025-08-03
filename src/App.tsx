import { RouterProvider } from "react-router";
import { router } from "./router";
import { TabProvider } from "./context/TabProvider";

function App() {
  return (
    <TabProvider>
      <RouterProvider router={router} />
    </TabProvider>
  );
}

export default App;
