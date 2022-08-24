// Layout

import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin page

import AdminHome from "../pages/Admin";/* Le cambie el nombre a AdminHome porque habiamos puesto en indej.js que era  por default */
import AdminSignIn from "../pages/Admin/SigIn/SignIn";

//Client pages

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";



const routesAdmin=[
         {
             path:"/admin",
             layout: LayoutAdmin,
             component: AdminHome,
         },
         {
             path:"/admin/login",
             layout: LayoutAdmin,
             component: AdminSignIn,

         },
         {
            path:"*",
            layout: LayoutAdmin,
            component: Error404,
         }
];

const routesClient=[
    {
        path:"/",
        layout: LayoutBasic,
        component: Home,
    },
    {
        path:"/contact",
        layout: LayoutBasic,
        component: Contact,
    },
    {
        path:"*",
        layout: LayoutAdmin,
        component: Error404,
    },

];

const RoutesMap=[...routesAdmin,...routesClient];/*aca hizo una copia de routes adminy routes Client para tener todo listo lo organizo solamente*/

export default RoutesMap;
