
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function Post({ data, documentId, deleteTask, date, time }) {

  const [deletee, setDelete] = useState(false)

  function handleDelete(){
      setDelete(false)
  }

  return (

    <div className="flex flex-col gap-1 items-center justify-around bg-slate-800 px-3 py-2 rounded-md mt-2 w-40 custom-sm:w-44">

      {
        // className="bg-white fixed left-1/2 top-1/2 rounded-sm px-4 py-2"
        deletee &&
        <div className="h-screen w-screen flex fixed justify-center items-center ">
          <div className="bg-white rounded-sm px-4 py-2 fixed top-1/3 left-1/4">
            <div className="text-center text-red-500">Delete Task</div>
            <div className="py-2">
              <button className="px-2 bg-gray-300 rounded-sm mr-1 hover:cursor-pointer" onClick={handleDelete}>Cancel</button>
              <button className="px-2 text-white bg-red-500 rounded-sm ml-1 hover:cursor-pointer" onClick={() => deleteTask(documentId)}>Delete</button>
            </div>
          </div>
        </div>
      }

      <div className="w-full">
        <RxCross1 className="text-red-600 font-semibold text-xl float-right hover:cursor-pointer" onClick={() => setDelete(true)} />
      </div>

      <Link to={`/addtask/${documentId}`}>
        <input className="bg-slate-800 text-lg font-medium text-white overflow-hidden w-full focus:outline-none hover:cursor-pointer" readOnly value={data[0]} type="text" />
        <textarea className="bg-slate-800 resize-none overflow-hidden text-base text-gray-300 w-full focus:outline-none hover:cursor-pointer" value={data[1]} readOnly name="" id="" cols="30" rows="4"></textarea>
        <div className="text-gray-400 text-sm">{date}, {time}</div>
      </Link>
    </div>
  )
}

export default Post