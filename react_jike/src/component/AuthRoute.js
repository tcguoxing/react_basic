import {getToken} from "@/utils";
import {Navigate} from "react-router-dom";

export default function(props) {
    const {children} = props

    if(getToken()) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace />
    }
}