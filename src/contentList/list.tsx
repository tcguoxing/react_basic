import SingleContent from './singleContent'
import SubSingle from './subSingle'
import { useState, createContext } from 'react'


const theList = [
  {uid: '123131231', content:'32213123123', id:'fdsxdf', order: 12},
  {uid: '123131231', content:'最大', id:'fdsxdfggg', order: 15},
  {uid: '323232323', content:'sdfsdxx321', id:'xddsfds', order: 10},
  {uid: '222222222', content:'最小', id:'sdfxcxrwfe4', order: 5},

]

const currentUser = {
  uid: '123131231'
}

  let normalOrder = true
  let count = 0

  let interval = null
  let activeId = ''

    const Ctx = createContext()

function doThis() {
  alert('msg from do this.')
}

function LoadContent() {



  count++
  let [list, setList] = useState(theList)
  function deleteItem(id) {
    setList(list.filter(item => item.id !== id))
  }

  console.log('load content: ', count)

  function orderThis() {
    // console.log('orderThis')
    normalOrder = !normalOrder

    // 每次调用 orderThis 时都会重新声明并初始化为 true，所以 normalOrder 永远是 false 的“第一次取反”结果
    list.sort((a, b) => normalOrder ? a.order - b.order : b.order - a.order)
    // console.log(list)
    setList([...list])

  }

  function startInterval() { 
    interval = setInterval(() => {
      orderThis()
    }, 1)
  }
  function endInterval() {
       clearInterval(interval)
  }

  const [activeId, setActiveId] = useState(null)

  function transFormId(id) {
    setActiveId(id)
  }
  const childContent = 'childContent'
  const child = <span>this is {childContent} span</span>

  const sendMsg = (msg) => {
    console.log('sendMsg: ', msg)
  }

  const [msgFromBrother, setMsgFromBrother] = useState('')
  const toMyBrother = (msg) => {
    setMsgFromBrother(msg)
  }

  return <div>
    <button onClick={startInterval}>Start</button>
    <button onClick={endInterval}>End</button>
    <Ctx.Provider value={doThis}>
    {list.map((theItem, theIndex) => 
    {
      return <SingleContent Ctx={Ctx} key={theItem.id} item={theItem} msgFromBrother={msgFromBrother} sendMsg={sendMsg} index={theIndex} deleteItem={deleteItem} transFormId={transFormId} activeId={activeId} currentUserId={currentUser.uid} >
        <div>这就是那啥，咱就是说。</div>
        <SubSingle  toMyBrother={toMyBrother}></SubSingle>
      </SingleContent>
      })
    }
    </Ctx.Provider>
  </div>
}



export default LoadContent
