import {useDispatch,useSelector} from 'react-redux'
import {gmAction,gaAction} from '../redux/message/message.action'
let Message = ()=>{
    let dispatch = useDispatch();
    let message=useSelector((state)=>{return state})
    let gmHandler=()=>{
        dispatch(gmAction())
    }
    let gaHandler=()=>{
        dispatch(gaAction())
    }
    return <div>
            <h3>Message Component</h3>
            <hr/>
            <h3>Value:{message.msg}</h3>
            <h3>{JSON.stringify(message)}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
            </div>
}
export default Message;