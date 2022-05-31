import React,{useState} from 'react'

function ProgressBar() {
    const [current, setCurrent] = useState(0)
    const [total, setTotal] = useState(72800)
  return (
    <>
        <div className="progressBar">
             {current.toLocaleString("en-US")} of {total.toLocaleString("en-US")}
        </div>
    </>
  )
}

export default ProgressBar