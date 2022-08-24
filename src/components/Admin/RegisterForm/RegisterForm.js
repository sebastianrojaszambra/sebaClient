import "./RegisterForm.scss";
import {Form, Checkbox,Input,Button,notification} from 'antd';
import {UserAddOutlined, LockOutlined} from '@ant-design/icons';
import {useState} from 'react';
import {minLengthValidator,emailValidator} from "../../../utils/formValidation";
import {signUpApi} from '../../../api/user';


export default function RegisterForm() {

  const[inputs,setInputs]=useState({
      email: "",
      password: "",
      repeatPassword:"",
      privacyPolicy:false
   });

   const[formValid,setFormValid]=useState({// si una funcion es false significa que el input es invalido
      email:false,
      password:false,
      repeatPassword:false,
      privacyPolicy:false

   });
   
   
   const changeForm = e =>{  // el checkbox funciona distinto hay que ponerle checked
      if(e.target.name === "privacyPolicy"){ //privacyPolicy es el name de checkbox
         setInputs({
         ...inputs,
          [e.target.name]:e.target.checked
         });
      }else {
         setInputs({
         ...inputs,
         [e.target.name]:e.target.value
          });
      }
   };

   const inputValidation= e=>{
      //e.target es el input completo
      const{type,name}=e.target;// type seria password, email etc y name seria password password repeat etc

      if(type === "email"){
         setFormValid({
            ...formValid, //haz una copia de formVlidn y solo actualizamos el que necesitamos email validator
            [name]:emailValidator(e.target) 
         });


      }
      if(type==="password"){
         setFormValid({
            ...formValid, // lo va a aceptar solo si tiene mas de 6 caracteres eso se puse en formvalidation
            [name]:minLengthValidator(e.target,6)// el minLengthValidator recibia el input y el tamaño minimo
            

      });
      }
      if(type==="checkbox"){
         setFormValid({
            ...formValid,
            [name]:e.target.checked
         })
      }

   };
    
   const register= async e =>{
      
      
      const emailVal=inputs.email;
      const passwordVal=inputs.password;
      const repeatPasswordVal=inputs.repeatPassword;
      const privacyPolicyVal=inputs.privacyPolicy;

      if(!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal){
       notification["error"]({
         message:"todos los campos son obligatorios"
       })
      } else {
         if(passwordVal !== repeatPasswordVal){
            notification["error"]({
               message:"Las contraseñas tienen que ser iguales"
             
            });
         } else{// aca se conecta con la api sigin y se ingresa a mongo
            const result = await signUpApi(inputs);//el await va a esperar a que se acabe la ejecucion de signUpapi para continuar

            if(!result.ok){
               notification["error"]({
                  message:result.message
               });
            } else{
               notification["success"]({
                  message:result.message
               });
               resetForm();

            }
            
            // tO DO: Conectar con el APi y registrar usuarop
         }

      }

   };

   const resetForm =()=>{ // este es para formatear el documento
        const inputs= document.getElementsByTagName("input"); // tag son las etiquetas Form, input en este caso input

        for (let i=0; i < inputs.length; i++){//mientras i sea menos a input.leguth se va a seguir ejecutando
           inputs[i].classList.remove("success");
           inputs[i].classList.remove("error");
        }

        setInputs({
         email: "",
         password: "",
         repeatPassword:"",
         privacyPolicy:false
         });

         setFormValid({
         email:false,
         password:false,
         repeatPassword:false,
         privacyPolicy:false
         });


   };
   
   return(
       <Form className="register-form" onFinish={register} onChange={changeForm}>
          <Form.Item>
             <Input 
              prefix={<UserAddOutlined type="user" style={{color:"rgba(0, 0, 0, .25)"}}  />} 
              type="email" 
              name="email" 
              placeholder="Correo Electronico" 
              className="register-form__input"
              onChange={inputValidation}
              value={inputs.email}
              />
          </Form.Item>
          <Form.Item>
             <Input 
              prefix={<LockOutlined  style={{color:"rgba(0, 0, 0, .25)"}}  />} 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="register-form__input"
              onChange={inputValidation}
              value={inputs.password}
              />
          </Form.Item>
          <Form.Item>
             <Input 
              prefix={<LockOutlined  style={{color:"rgba(0, 0, 0, .25)"}}  />} 
              type="password" 
              name="repeatPassword" 
              placeholder="Repeat Password" 
              className="register-form__input"
              onChange={inputValidation}
              value={inputs.repeatPassword}
              />
          </Form.Item>
          <Form.Item>
             <Checkbox name="privacyPolicy" onChange={inputValidation} checked={inputs.privacyPolicy}>
                 He leido y acepto la politica de privacidad 
            </Checkbox> 
          </Form.Item>
          <Form.Item>
             <Button htmlType="submit" className="register-form__button">
               Aceptar
            </Button> 
          </Form.Item>
       </Form>
   );
};