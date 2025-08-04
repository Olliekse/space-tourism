import { RouterProvider } from "react-router";
import { router } from "./router";
import { DestinationProvider } from "./context/DestinationProvider";
import { CrewProvider } from "./context/CrewProvider";
import { TechnologyProvider } from "./context/TechnologyProvider";

function App() {
  return (
    <div className="page-wrapper">
      <DestinationProvider>
        <CrewProvider>
          <TechnologyProvider>
            <RouterProvider router={router} />
          </TechnologyProvider>
        </CrewProvider>
      </DestinationProvider>
    </div>
  );
}

export default App;
