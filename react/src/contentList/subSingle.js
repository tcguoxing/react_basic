export default function (props) {
  const {toMyBrother} = props
  return <div>
    <button onClick={()=>toMyBrother('this info is from my brother.')}>toMyBrother</button>
    </div>
}