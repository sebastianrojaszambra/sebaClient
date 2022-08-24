import { Layout } from "antd";
import { useState } from "react";
import {  Navigate } from "react-router-dom";
import MenuTop from "../components/Admin/MenuTop/MenuTop";
import "./LayoutAdmin.scss";
import MenuSider from "../components/Admin/MenuSider";
import useAuth from "../hooks/useAuth";


export default function LayoutAdmin(props){
   
    const{children}=props;
    const [menuCollapsed,setMenuCollapsed]=useState(false);
    const{Header,Content,Footer} =Layout;
      //Layout , em style de layout determinamos el ancho del marfin left del sider atravez de un condicional si menu colalapsed 80 caso contrario 200
    const {user, isLoading}=useAuth();

    console.log(user);
    
    if(!user){
       return(
        <div>
          <Navigate to="/admin/login" replace={true} />
        </div>
       );
    }

    return(

       <Layout>
           <MenuSider menuCollapsed={menuCollapsed}/>
           <Layout className="layout-admin" style={{marginLeft:menuCollapsed? "80px": "200px"}}>
                <Header className="layout-admin__header">
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                </Header>
                <Content className="layout-admin__content">
                         {children}
                </Content>
                <Footer className="layout-admin__footer">Sebastian rojas</Footer>
           </Layout>
       </Layout>
    )

};