import { useState } from "react"

function KilometersConvert(){
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    function convert(event){
        setInput(event.target.value)
    }
    function calc(){
        const x = input * 1000 * 100 * 10
        setResult( x.toFixed(3))
    }
    return (
        <div>
        <p>введите расстояние в киллометрах</p>
      <input type = 'number' value={input} onChange={convert}></input>
      <button onClick={calc}>расчитать</button>
      <div>{result} миллиметров</div>
    </div>
    )
}

export default KilometersConvert