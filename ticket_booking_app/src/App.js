import { Navbar } from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import {SignUp} from "./Pages/SignUp";
import {Login} from "./Pages/Login";
import {useDispatch} from "react-redux";
import {setAllUser} from "../src/Redux/AllUsers/Action"
import { Home } from "./Pages/Home";
import {SearchResults} from "./Pages/SearchResults"
import { Checkout } from "./Pages/Checkout";

function App() {
  const dispatch = useDispatch();
  const fetchUsers = () => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setAllUser(res));
      })
      .catch((err) => console.log(err));
  };
  fetchUsers();
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element ={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/results" element={<SearchResults/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
