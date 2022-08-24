
import './SignIn.scss';
import {Layout,Tabs} from 'antd';
import logo from '../../../assets/img/jpg/logo.jpg';
import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from '../../../components/Admin/LoginForm/LoginForm';




export default function AdminSignIn(){
    const{Content} = Layout;
    const{TabPane} = Tabs;

    return(
       <Layout className="sign-in">
         <Content className="sign-in__content">
            <h1 className="sign-in__content-logo">
                <img src={logo} alt={logo}/>
            </h1>
           <div className="sign-in__content-tabs">
                <Tabs type="card">
                    <TabPane tab={<span>Entrar</span>} key="1">
                        <LoginForm/>
                    </TabPane>
                    <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                        <RegisterForm/>
                    </TabPane>
                </Tabs>
            </div>
         </Content>
       </Layout>
    );
}