import { useState, useRef, useEffect } from 'react'

export default function () {
const [input, setInput] = useState('')  

const inputRef = useRef(null)

useEffect(() => { // 组件渲染完后
  inputRef.current.focus()
  // console.log('inputRef: ',inputRef)
  // window.open('https://www.baidu.com', '_blank')
}, [])

const [data, setData] = useState('')
useEffect( () => { // 输入框内容改变时
  async function getData() {
    // let res = await fetch('http://117.72.46.111/dev/auth/public-key')
    // let resData = await res.json()
    // let formData = await res.formData()
    // console.log('resData: ', resData)
    // console.log('formData: ', formData)
    // let publicKey = resData.data.publicKey
    // setData(publicKey)
  }
  getData()
}, [])

const [count, setCount] = useState(0)
  const [subC, setSubC] = useState(20)

useEffect(() => { // 输入框内容改变时
  console.log('副作用函数执行了')
})

useEffect(() => { // 输入框内容改变时
  console.log('副作用函数执行了when null')
}, [])

useEffect(() => { // 输入框内容改变时
  return () => { // 
    // 最常见是组件卸载时执行
    console.log('Input 组件卸载了；')
  }
}, [])

// 特定依赖性
useEffect(() => { // 输入框内容改变时
  console.log('副作用函数执行了when count change.')
}, [count, subC])
  return <span>
    <input
      value={input}
      ref={inputRef}
      onChange={(e) => setInput(e.target.value)}
      >
    </input>
    {/*<button onClick={sendComment}>Send</button>*/}
    <button onClick={() => setCount(count + 1)}>Count CLick{count}</button>
    <button onClick={() => setSubC(subC + 1)}>SubCount CLick{subC}</button>
    <span>{data}</span>
  </span>
}
