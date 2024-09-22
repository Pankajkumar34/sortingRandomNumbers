import React, { useState } from 'react'
const alphaArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
export const GetName = () => {
    const [StringName, setStringName] = useState("")
    const [currentIndex, setCurrentIndex] = useState(null)
    const [result, setResult] = useState([])
    const [isStart, setIsStatrt] = useState(false)
    const StartBtn = async () => {
        if (StringName.trim() == '') return alert("Enter Your Name")
        for (let i = 0; i < StringName.length; i++) {
            setIsStatrt(true)
            let char = StringName[i].toUpperCase();
            let index = alphaArray.indexOf(char);
            await sleep(800)
            setCurrentIndex(index)

            if (index !== -1) {         
                setResult((pre) => [...pre, char])

            } else {

            }

        }
        setTimeout(() => {
            setIsStatrt(false)
        }, 1000)

        console.log(result, "result")
    }
    const sleep = (ms) => {
        return new Promise(resolve => setInterval(resolve, ms))
    }
const clearData=()=>{
    setStringName("")
    setResult([])
}
    return (
        <div className="grid-container my-5 border-t p-3">
            <div className='flex justify-between'>
                <form  >
                    <label htmlFor="" className='bg-white font-semibold p-2 rounded mx-2'>Enter your name :</label>
                    <input type="text" placeholder='Enter your name' className='rounded p-2 ' value={StringName} onChange={(e) => setStringName(e.target.value)} />
                </form>
                <button className='border border-white w-[80px] h-[40px] rounded bg-slate-100 font-semibold ' onClick={StartBtn}>Start</button>
            </div>
            <div className="border border-white rounded  p-3 mt-3">

                <div className='flex justify-between'>
                 <p className='border p-3 rounded-sm my-3 tracking-[10px] h-[40px] font-semibold bg-slate-200'>{result}</p>
                 <button className='border border-white font-semibold text-white rounded-sm p-2 h-[40px] w-[60px] bg-red-500' onClick={clearData}>Clear</button>
                </div>
                <div className=' grid grid-cols-12 gap-2 border border-white p-3 rounded'>
                    {alphaArray.map((item, index) => (
                        <div key={index} className="grid-item">
                            <div
                                style={{ backgroundColor: currentIndex == index && isStart == true ? "green " : "white" }}
                                className="box bg-white border-2 border-gray-200 rounded-md p-2 h-[60px] w-[60px] flex justify-center items-center"
                            >
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default GetName