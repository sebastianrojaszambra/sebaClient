import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";


/*eslint-disable*/
// puse ese comentario eslint para que no me marcara error
export default () => useContext(AuthContext);
/*eslint-enable*/