import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import RoutesMap from './config/routes';
import AuthProvider from './providers/AuthProvider';
import 'antd/dist/antd.min.css';
import './App.scss';



function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
         <Routes>
           {/* <Route path="*" element={<Error404/>}/>*/}
            {RoutesMap.map((route,index)=>(
              <Route 
                  key={index} 
                  path={route.path} 
                  element={
                     <route.layout>{/*primero va a renderizar el layout admin o client*/} 
                        <route.component/>
                     </route.layout>}
               />
               
              ))}    
         </Routes>
     </BrowserRouter>
  </AuthProvider>   
  );
}

export default App;
