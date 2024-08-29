import { useState } from "react"
import MinusIcon from './icons/MinusIcon'
import PlusIcon from './icons/PlusIcon'



const Counter = () => {

    const [count, setCount] = useState(0)


    return (<div className="bg-slate-50 flex flex-col items-center space-y-2 py-20">

        <p className=" text-white font-bold text-3xl bg-gray-700 p-4 rounded-md">Count: <span className="text-emerald-500" > {count} </span> </p>
        <div className="flex justify-center">
            <button onClick={() => setCount(count + 1)}> <PlusIcon /> </button>
            <button onClick={() => setCount(count - 1)}>  <MinusIcon /> </button>

        </div>

    </div>)
}

export default Counter