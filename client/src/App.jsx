import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Post from "./components/post/Post";

const user = false;

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "register",
      element: <div>{user ? <Home /> : <Register />}</div>,
    },
    {
      path: "login",
      element: <div>{user ? <Home /> : <Login />}</div>,
    },
    {
      path: "write",
      element: <div>{user ? <Write /> : <Register />}</div>,
    },
    {
        path: "settings",
        element: <div>{user ? <Settings /> : <Register />}</div>
    },
    {
      path: "post/:postId",
      element: <Single />,
    }
])

function App() {
    return (
        <div>
            <TopBar />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;