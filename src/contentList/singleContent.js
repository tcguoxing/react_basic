import { useContext } from "react";

function SingleContent(props) { // 必须大写
    const {index,Ctx, item, currentUserId, deleteItem, transFormId, activeId, children, sendMsg, msgFromBrother} = props

  const {content, id, uid} = item
  const doThis = useContext(Ctx)
  // console.log('children: ', children);
  
  return <div key={id} id={id} onClick={() => {transFormId(id);sendMsg('who are you')} } style={{width: '400px', height: '150px'}} className={`${activeId === id ? 'active' : ''}`}>
      <div >{index}</div>
      <span className="itemContent">{content}</span>
      {children}
      <div > 
        { currentUserId === uid && <button onClick={()=> deleteItem(id)}>删除</button> }
      </div>
      {msgFromBrother}
      <button onClick={doThis}>context Use</button>
    </div>
}

export default SingleContent

