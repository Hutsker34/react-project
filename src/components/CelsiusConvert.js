import { useState } from "react"


function CelsiusConvert(props){
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    function convert(event){
        setInput(event.target.value)
    }
    function calc(){
        const x = (input- 32) * 5/9
        setResult( x.toFixed(1))
    }

    return (
        <div>
            <p>введите температуру в фаренгейтах </p>
          <input type = 'number' value={input} onChange={convert}></input>
          <button onClick={calc}>расчитать</button>
          <div>{result} градусов</div>
        </div>
    )
}

export default CelsiusConvert