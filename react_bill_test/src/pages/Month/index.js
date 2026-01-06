import {useDispatch, useSelector} from "react-redux";
import {getBillData} from "@/store/modules/bill";
import {useEffect} from "react";


export default function () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillData())
        // console.log('res: ', res)
    }, [dispatch]);
    const {billList} = useSelector(store => store.bill)
    return <div>
        这是一个月度
    </div>
}