import { RouterProvider } from "react-router";
import { router } from "./router";
import { TabProvider } from "./context/HomeMenuProvider";
import { CrewProvider } from "./context/CrewProvider";

function App() {
  return (
    <div className="page-wrapper">
      <TabProvider>
        <CrewProvider>
          <RouterProvider router={router} />
        </CrewProvider>
      </TabProvider>
    </div>
  );
}

export default App;
