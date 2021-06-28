/* eslint-disable no-unused-vars */
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <TopBar/>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write/> */}
      {/* <Setting/> */}
      {/* <Login/> */}
      <Register/>
    </>
  );
}

export default App;
