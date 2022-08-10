import { Navbar } from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import {SignUp} from "./Pages/SignUp";
import {Login} from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route path="/signup" element ={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
