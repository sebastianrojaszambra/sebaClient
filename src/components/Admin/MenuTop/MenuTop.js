import './MenuTop.scss';
import { Button} from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined,PoweroffOutlined}  from "@ant-design/icons";
import logo from "../../../assets/img/jpg/logo.jpg";
/*menuCollapsed y setMenuCollapsed viene de LayoutAdmin */
export default function MenuTop({menuCollapsed,setMenuCollapsed}){

    return(
        <div className="menu-top">
            <div className="menu-top__left">{/*ESTA ES LA IMAGEN */}
                <img className="menu-top__left-logo" src={logo} alt="Sebastian"/>
                <Button type= "link" onClick={()=>setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed?<MenuFoldOutlined />:<MenuUnfoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                  <PoweroffOutlined/>                    
                </Button>
            </div>
        </div>
    )

}