import { RouterProvider, createHashRouter, redirect } from "react-router-dom";
import Assignment from "./Components/Assignment/Assignment";
import Attendance from "./Components/Attendance/Attendance";
import Contact from "./Components/Contact/Contact";
import Content from "./Components/Content/Content";
import Courses from "./Components/Courses/Courses";
import Layout from "./Components/Layout/Layout";
import Lectures from "./Components/Lectures/Lectures";
import Library from "./Components/Library/Library";
import Material from "./Components/Material/Material";
import Messages from "./Components/Messages/Messages";
import Profile from "./Components/Profile/Profile";
import Results from "./Components/Results/Results";
import Singnin from "./Components/Singnin/Singnin";
import TableStudent from "./Components/TableStudent/TableStudent";
import Videos from "./Components/Videos/Videos";

let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, loader: () => redirect("dasbord") },
      { path: "dasbord", element: <Content /> },
      { path: "library", element: <Library /> },
      { path: "courses", element: <Courses /> },
      { path: "material", element: <Material /> },
      { path: "lecture", element: <Lectures /> },
      { path: "assignment", element: <Assignment /> },
      { path: "videos", element: <Videos /> },
      { path: "profile", element: <Profile /> },
      { path: "contact", element: <Contact /> },
      { path: "attendance", element: <Attendance /> },
      { path: "table", element: <TableStudent /> },
      { path: "results", element: <Results /> },
      { path: "messages", element: <Messages /> },
    ],
  },
  { path: "signin", element: <Singnin /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
