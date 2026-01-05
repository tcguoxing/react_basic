import {useState} from "react";

export function useChangeVisible () {
    const [showInput, setShowInput] = useState(true)

    const toggleVisible = ()=> setShowInput(!showInput)
    return {showInput, toggleVisible}
}
