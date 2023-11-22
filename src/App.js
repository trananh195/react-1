import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./page/Register";
import Home from "./page/home/Home";
import AddBlog from "./page/home/blog/AddBlog";
import ListBlog from "./page/home/blog/ListBlog";

function App() {
  return (
      <>
          <div className={'container-fluid'}>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'register'} element={<Register/>}></Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={""} element={<ListBlog/>}></Route>
                    <Route path={"add-blog"} element={<AddBlog/>}></Route>
                </Route>
            </Routes>
          </div>
      </>

  );
}

export default App;
