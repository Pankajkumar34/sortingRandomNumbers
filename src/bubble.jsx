import React, { useState, useEffect } from 'react'

export const Bubble = () => {
  const [lengthNum, setLength] = useState(0)
  const [numbers, setNumbers] = useState([])
  const [animating, setAnimating] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const Generate = (e) => {
    e.preventDefault()
    let num = []
    if (lengthNum == 0 || lengthNum<0) return alert("Please enter a valid length")
if(lengthNum>10) return  alert("Max length 10")
    for (let i = 0; i < lengthNum; i++) {
      let randomNumber = Math.floor(Math.random() * 100)
      num.push(randomNumber.toString())
    }
    setNumbers(num)
    setAnimating(false)
  }

  const sortNum = async () => {
    let newNum = [...numbers]
    setAnimating(true)

    for (let i = 0; i < newNum.length; i++) {
      for (let j = 0; j < newNum.length ; j++) {
        setCurrentIndex(j) 
        await sleep(1000)    

        if (parseInt(newNum[j]) > parseInt(newNum[j + 1])) {
          let temp = newNum[j]
          newNum[j] = newNum[j + 1]
          newNum[j + 1] = temp
          setNumbers([...newNum])  
        }
      }
    }
    setAnimating(false)
    setCurrentIndex(null)  
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
console.log(currentIndex,animating)
  return (
    <>
      
          <div className=' '>
            <form onSubmit={Generate} className='py-[30px]' >
              <div className='bg-slate-200 w-[140px] rounded inline-block p-2'>
              <label htmlFor="" className=''>Length : </label>
              <input 
                type="number" 
                placeholder='Enter Length' 
                value={lengthNum} 
                onChange={(e) => setLength(e.target.value)} 
                className='w-[60px] rounded-sm h-[40px] p-2 ' 
              />
              </div>
              <input 
                type="submit" 
                value="Generate Random Numbers" 
                className='border bg-slate-200 text-black font-semibold border-white rounded-sm mx-3 p-2 float-right' 
              />
            </form>

            <div className='box flex  justify-between border rounded-sm mx-5 py-3'>
             <div className='flex mx-3 items-center'>
                <h2 className=' text-white font-extrabold border h-[60px] flex items-center justify-center p-3 '>Numbers  </h2>
             {
            numbers.length>0?(
                  <div className='flex my-3 '>
                    {numbers.map((item, index) => (
                      <div
                        key={index}
                        className={`w-[60px] h-[60px] bg-slate-200 mx-2 flex items-center justify-center ${  index == currentIndex   ? '!bg-green-300' : ''}`}
                        style={{
                          transition: 'transform 0.5s ease',
                          transform: animating ? `translateX(${index * 2}px)` : 'none',
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ):<p className='mx-[20px] text-white'>Generate Random numbers...</p>
              }
             </div>
              <div>
                <button onClick={sortNum} className='border bg-green-400  border-white rounded-sm m-3 h-[60px] w-[100px] font-serif text-[20px ] font-semibold'>
                  Start
                </button>
              </div>
            </div>
          </div>
    
    </>
  )
}
