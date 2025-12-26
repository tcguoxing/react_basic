import Root from "./root"
import {right as Right, left as Left, Button} from "./right"

const mainApp = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", width: "100vw", height: "100vh", background: "lightgrey"}}>
      <Root/>
      <Right/>
      <Button/>
      <Button/>
    </div>
  )
}
export default mainApp
