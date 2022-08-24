import {Layout} from 'antd';
export default function LayoutBasic (props){
const {children}= props;
const {Content,Footer}= Layout;
    return(
        <Layout>
            <h2>Menu...</h2>
            <Content>{children}</Content>
            <Footer>Footer..</Footer>
        </Layout>
    )

};