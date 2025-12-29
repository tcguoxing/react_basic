import Main from './main'
import './index.css'
import ListContent from './contentList/list'
import Input from './components/input'
import {createContext, useState} from 'react'
import {useChangeVisible} from "./hooks/changeVisible";
import ReduxUse from "./components/reduxUse";

// 项目的根组件

const list = [
    {
        id: 1,
        title: '1',
        completed: false
    },
    {
        id: 2,
        title: '2',
        completed: true
    },
    {
        id: 3,
        title: '3',
        completed: false
    }
]

function getDifferentType(a) {
  if (a) {
    return <span>zzzzz</span>
  } else {
    return <span>tttt</span>
  }
}
const num = '3'

const onCLick=(e)=>{
  console.log('click', e)
  window.alert('click', e)
}

//   const Ctx = createContext()

// function doThis() {
//   alert('msg from do this.')
// }
function App() {

    const {showInput, toggleVisible} = useChangeVisible()

  return (
    <div className="App">
      this is app
      <ul >
        {list.map(e =>{
          // return getDifferentType(e.completed)
          if(!e.completed) {
            return <li key={e.id} onClick={(e) =>onCLick(e)}>{e.title}</li>
          } 
        })}
        {`${num} + 1`}
      </ul>
        {showInput && <Input/>}

      <button onClick={toggleVisible}>隐藏Input组件</button>
        <ReduxUse/>
      <ListContent />
    </div>
  );
}

export default App;

