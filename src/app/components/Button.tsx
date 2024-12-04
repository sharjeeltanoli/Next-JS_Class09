import { FC } from "react"
const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className=" w-32 bg-teal-700 rounded-full py-3 my-4 font-bold text-white hover:bg-green-600 duration-500 hover:scale-110">
        {text}
    </button>
  )
}

export default Button