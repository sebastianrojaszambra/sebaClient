// aca voy a poner todas las funciones para validad el formulario


export function minLengthValidator(inputData,minLength){//validad que el formulario tenga minimo de caracteres
    // recibe la inputdata y el minimo tamaño para ser minimo
    const {value}=inputData; // el value lo vamos a sacar de inputData
    
    //<input name="email" placeholder="Correo" value="srzambra@hotmail"/> esto le pasamos inputdata


    removeClassErrorSuccess(inputData);

    if(value.length>=minLength){
        inputData.classList.add('success');
        return true;
    }else {
        inputData.classList.add('error');
        return false;

    }

};

export function emailValidator(inputData){ // este valida el email

   // esta emailValid lo sacamos de internet en el curso aparece el que esta como comentario yo puse el otro
  /*const emailValid =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; */
  const emailValid =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const {value}=inputData;
  
  removeClassErrorSuccess(inputData);

  const resultValidation=emailValid.test(value);

  if (resultValidation){ // si resultValidation es verdadero entonces success
    inputData.classList.add("success");
    return true;
  }else{
    inputData.classList.add("error");
    return false;
  }

}

function removeClassErrorSuccess(inputData){ // esta funcion va a remover la clase de error
     inputData.classList.remove("success");//remueve la clase success
     inputData.classList.remove("error");
    
}