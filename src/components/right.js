import { useState } from "react"
import "../index.scss"

export function right() {
  return <div  style={{ height: '100px', width: '600px', background: 'red' }}>right</div>
}

export function left() {
  return <div style={{ height: '100px', width: '600px', background: 'green' }}>left</div>
}


export function Button() {
  let [count, setCount] = useState(0) // 范围内；

  let [obj, setObj] = useState({ count: count })
  function minusCount() {
    // obj.count = obj.count - 1
    console.log('count: ', count)
    let countTemp = obj.count - 1
    setObj((function() {
      setCount(count+1)
      return {count: countTemp}
    })())
  }

  return <div className="rightStyle">
    <button className="font-weight-bold" onClick={() => setCount(count + 1)}>{count}</button>
    <button onClick={minusCount}>{obj.count}</button>
    {/* {obj.count} */}
  </div>
}

