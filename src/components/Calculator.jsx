import {useState} from 'react'

export const Calcultaor = () => {
    const [result, setResult] = useState(0)
    const [input, setInput] = useState('')
    const [toggle, setToggle] = useState(false)
    
    const inputType = (e) => {
        setToggle(false)
        setInput((inp) => inp + e.target.value)
    }

    const equals = () => {
        setToggle(true)
        if(input.includes('+')){
            let inputArray = input.split("+")
            setResult(parseInt(inputArray[0]) + parseInt(inputArray[1]))
            setInput(" ")
        }else if(input.includes('-')){
         let inputArray = input.split("-")
            setResult(parseInt(inputArray[0]) - parseInt(inputArray[1]))
            setInput(" ")
        }else if(input.includes('/')){
         let inputArray = input.split("/")
            setResult(parseInt(inputArray[0]) / parseInt(inputArray[1]))
            setInput(" ")
        }else if(input.includes('*')){
            let inputArray = input.split("*")
            setResult(parseInt(inputArray[0]) * parseInt(inputArray[1]))
            setInput(" ")
        }
    }
    const clear = () => {
        setResult(0)
        setInput(" ")
        setToggle(false)
    }
    const deleteNumber = () => {
        setInput((inp) => inp.slice(0,-1))
    }
    return <>
        <div className="calculator-container">
            {toggle ? <p>{result}</p> : <p>{input}</p>} 
            <div className='calculator-buttons'>
            <input type="button" value="0" className="button-0" onClick={inputType}/>
            <input type="button" value="1" className="button-1" onClick={inputType}/>
            <input type="button" value="2" className="button-2" onClick={inputType}/>
            <input type="button" value="3" className="button-3"onClick={inputType}/>
            <input type="button" value="4" className="button-4"onClick={inputType}/>
            <input type="button" value="5" className="button-5"onClick={inputType}/>
            <input type="button" value="6" className="button-6"onClick={inputType}/>
            <input type="button" value="7" className="button-7"onClick={inputType}/>
            <input type="button" value="8" className="button-8"onClick={inputType}/>
            <input type="button" value="9" className="button-9"onClick={inputType}/>
            <input type="button" value="+" className="button-+"onClick={inputType}/>
            <input type="button" value="-" className="button--"onClick={inputType}/>
            <input type="button" value="*" className="button-*"onClick={inputType}/>
            <input type="button" value="/" className="button-/"onClick={inputType}/>
            <input type="button" value="=" className="button-=" onClick={equals}/>
            <input type="button" value="AC" className="button-AC" onClick={clear}/>
            <input type="button" value="DE" className="button-DE" onClick={deleteNumber}/>
            </div>
        </div>
    </>
} 