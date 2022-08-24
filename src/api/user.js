import {basePath,apiVersion} from './config';

export function signUpApi(data){
    const url=`${basePath}/${apiVersion}/sign-up`; // si cambia
    const params={
         method:"POST",
         body:JSON.stringify(data), // este es el cuerpo email repeat name etc....
         headers:{
            "Content-Type": "application/json"
         }
    };

    

     
    return fetch(url,params)
      .then(response => {
          return response.json();
       })
      .then(result =>{
           if(result.user){
                 return {
                  status:200,
                  message:"Usuario creado con exito"
                 };
            }
            return {
               ok:false,
               message: result.message

            };// de lo contrario devulve falso
       })
       .catch(err =>{// en caso de error
         return {
               ok:false,
               message:err.message
         };
       });
}    






// LEER
// LA API LO QUE HACE ES CONECTAR EL FRONT CON EL BACK
//esta api signInApi() en los parencecis recibe la informacion de lo que uno escribe en el front y lo lleva al back
// esta es la funcion para recibir signIn la data va a ser el usuario
export function signInApi(data){
   const url=`${basePath}/${apiVersion}/sign-in`;
   const params={
      method:"POST",
      body: JSON.stringify(data),
      headers:{ 
         "Content-Type":"application/json"
      }
   };
   
   return fetch(url, params)
      .then(response =>{
        return response.json();
      })
      .then(result =>{
         return result;
      })
      .catch(err =>{
         return err.message;
      });

}
