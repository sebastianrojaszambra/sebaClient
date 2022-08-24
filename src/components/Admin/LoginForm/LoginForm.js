import "./LoginForm.scss";
import {Form,Input,Button, notification} from "antd";
import {UserAddOutlined, LockOutlined} from '@ant-design/icons';
import { useState } from "react";
import {signInApi} from '../../../api/user';
import {ACCESS_TOKEN,REFRESH_TOKEN} from '../../../utils/constants';

export default function LoginForm(){
   
    const[inputs,setInputs] = useState({
        email:"", 
        password:"",
    });

    const changeForm = e => {
        setInputs({ // haz una copia de los input y etajet es igual a le tarjet valores
            ...inputs,
            [e.target.name]:e.target.value
        });
    };
 

    //para ver los contenidos de una promesa se ocupa el asyn y await o un .then
    const login = async e => {
        // con async y await le digo al computador que espere la ejecucion y despues continue
        const result= await signInApi(inputs);
    
        
      
        if(result.message){ // si result existe entonces da error porque solo tenemos un mensaje cuando hay error
            notification["error"]({
                message: result.message
            });
        }else{
            const{accessToken,refreshToken}=result;//del result voy a traer el accessToken y refresh
            localStorage.setItem(ACCESS_TOKEN,accessToken);
            localStorage.setItem(REFRESH_TOKEN,refreshToken);
        
            notification["success"]({
               message:"Login correcto"
            });
            
            window.location.href="/Admin";

        }
        
    };
    // este formulario es de ant por lo que no ocupa onSubmit sino OnFinish
    return(
      <Form className="login-form" onChange={changeForm} onFinish={login}>
        <Form.Item>
            <Input 
              prefix={<UserAddOutlined type="user" style={{color:"rgba(0,0,0,.25)"}}  />}
              type="email"
              name="email"
              placeholder="correo electronico"
              className="login-form__input"

            />
        </Form.Item>
        <Form.Item>
            <Input 
              prefix={<LockOutlined type="lock" style={{color:"rgba(0, 0, 0, .25)"}}  />}
              type="password"
              name="password"
              placeholder="Contraseña"
              className="login-form__input"
            />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" className="login-form__button">
                 Entrar
            </Button>
        </Form.Item>
      </Form>
    )
};