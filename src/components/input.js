import { useState, useRef, useEffect } from 'react'

export default function (sendComment) {
const [input, setInput] = useState('')  

const inputRef = useRef(null)

useEffect(() => { // 组件渲染完后
  inputRef.current.focus()
  console.log('inputRef: ',inputRef)
  window.open('https://www.baidu.com', '_blank')
}, [])
// inputRef.current.style = 'none'
console.log('inputRef: ',inputRef)
  return <span>
    <input
      value={input}
      ref={inputRef}
      onChange={(e) => setInput(e.target.value)}
      >
    </input>
    <button onClick={sendComment}>Send</button>
  </span>
}
