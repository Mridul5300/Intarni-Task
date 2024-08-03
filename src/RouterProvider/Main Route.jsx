import {createBrowserRouter,} from "react-router-dom";
import Main from "./Main";
import Home from "../Home/Home";
import Mobile from "../AllMobile/Mobile";
import About from "../About/About";

const router = createBrowserRouter([
     {
       path: "/",
       element:<Main></Main> ,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'/mobile',
               element:<Mobile></Mobile>
          },
          {
               path:"/about",
               element:<About/>
          }
       ]
     },
   ]);
 export default router  