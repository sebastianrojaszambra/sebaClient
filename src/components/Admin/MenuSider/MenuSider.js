import {Link} from 'react-router-dom';
import {HomeOutlined, MenuOutlined} from '@ant-design/icons';
import {Menu, Layout} from 'antd';
import './MenuSider.scss';

export default function MenuSider({menuCollapsed}){
    
    const{ Sider } =Layout;//  El sider es una propiedad del Layout lo destructuro
     //Layout.Sider es igual a const{Sider}=Layout pero mas simple con Sider no mas
     //destructurar es sacar una propiedad ejemplo sider es una propiedad de Layout
    

     return(
         <Sider className="admin-sider" collapsed={menuCollapsed}>
            
             <Menu theme='dark' mode="inline" defaultSelectedKeys={["1"]}>                
                 <Menu.Item key='1'>
                    <Link to={"/admin"} >
                        <MenuOutlined/>
                        <span className="nav-text" > Home</span>
                    </Link>
                 </Menu.Item>
                 <Menu.Item key="2">
                    <Link to={"/admin/menu-web"}>
                        <HomeOutlined/>
                        <span className="nac-text"> Menu web</span> 
                     </Link>
                 </Menu.Item>
             </Menu>
         </Sider>
    );
}
