import {useState, useEffect ,createContext} from "react";
import {getAccessTokenApi,getRefreshTokenApi,refreshAccessTokenApi,logout} from "../api/auth";
import jwtDecode from "jwt-decode";



export const AuthContext=createContext();


// envolvi en app toda la rutas en authprovider 
// para que la envolvemos, le pasamos el user

export default function AuthProvider(props){
 
    const {children}=props; //children seria todos los elementos que envuelve 
    
    const [user,setUser]=useState({
        user:null,
        isLoading:true
    });

    useEffect(() =>{
        checkUserLogin(setUser);
    },[]);
            
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
   // va a return children acordarse que auth provider envolvi todo en app.js envolvi el router y todo eso
}

function checkUserLogin(setUser){//para poder actualizar el usuario
    const accessToken = getAccessTokenApi();

    
  
    if(!accessToken){ // si es invalido me hace esto
        const refreshToken = getRefreshTokenApi();
         
        
        if(!refreshToken){
            logout();
            setUser({
                user:null,
                isLoading:false
            });
         }else{
             refreshAccessTokenApi(refreshToken);
         }
    } else{// si es valido esto
        setUser({
            isLoading:false,
            user:jwtDecode(accessToken)
            
            
        });

    }

    
}