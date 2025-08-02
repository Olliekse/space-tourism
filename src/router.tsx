import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Destination from "./routes/Destination";
import Technology from "./routes/Technology";
import Crew from "./routes/Crew";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    { path: "/destination", element: <Destination /> },
    { path: "/crew", element: <Crew /> },
    { path: "/technology", element: <Technology /> },
  ],
  {
    basename: "/space-tourism",
  }
);
