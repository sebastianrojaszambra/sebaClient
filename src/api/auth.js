import { basePath,apiVersion } from "./config";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";

//1)Funcion para obtener el AccessToken

export function getAccessTokenApi(){
    const accessToken =localStorage.getItem(ACCESS_TOKEN);

    if(!accessToken || accessToken==="null"){
        return null;
    }

    return willExpireToken(accessToken) ? null : accessToken;

};

//2)Funcion para obtener el refresh token

export function getRefreshTokenApi(){
    const refreshToken =localStorage.getItem(REFRESH_TOKEN);

    if(!refreshToken || refreshToken==="null"){
        return null;
    }

    return willExpireToken(refreshToken) ? null:refreshToken;



}


export function refreshAccessTokenApi(refreshToken){
   const url=`${basePath}/${apiVersion}/refresh-access-token`;
   const bodyObj={ 
    refreshToken:refreshToken
   };
   const params={
     method:"POST",
     body:JSON.stringify(bodyObj),
     headers:{
        "Content-Type":"application/json"
     }
   };

   fetch(url,params)
    .then(response => { 
        if(response.status !==200){// si la respuesta es dif a 200 eso significa que hay un error recuerda 200 es no hay error
            return null;
        }
        return response.json();// en caso contrario devuelve la respues json
    })
    .then(result => {
        if(!result){
            logout();// la funcion esta mas abajo si no hay resultado eliminar los acce y refress
        } else{
            const {accessToken,refreshToken}=result;
            localStorage.setItem(ACCESS_TOKEN,accessToken);
            localStorage.setItem(REFRESH_TOKEN,refreshToken);
        }
    });
}

//aca va a eliminar los access y refresh, si no hay token no hay usuario logeado
export function logout(){
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

//3)Funcion para validad que el token no este caducado

function willExpireToken(token){ // esta funcion es para saber si el token caduco
    const seconds=60;
    const metaToken=jwtDecode(token);
    const{exp}=metaToken;
    const now= (Date.now() + seconds)/1000;

    return now > exp; //devolvera true si el token a expirado y false si no ha expirado

    
}



