
import { RiDeleteBin6Line } from "react-icons/ri";

function PostData({ data, deleteTask }) {
  return (
    <div className="flex gap-4 items-center justify-around bg-slate-500 px-2 py-1 rounded-sm w-56">
      <h2
        style={{
          color: "white"
        }}
      >{data}</h2>
      
      <RiDeleteBin6Line className="text-red-600 text-xl" onClick={()=>deleteTask(data)}/>
    </div>
  )
}

export default PostData