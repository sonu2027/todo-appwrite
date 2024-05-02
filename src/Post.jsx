
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function Post({ data, documentId, deleteTask, date, time }) {

  const [deletee, setDelete] = useState(false)

  function handleDelete() {
    setDelete(false)
  }

  return (

    <div className="flex flex-col gap-1 items-center justify-around bg-slate-800 px-3 py-2 rounded-md mt-2 w-40 custom-sm:w-44">

      {
        deletee &&
        <div className="h-screen w-screen flex justify-center items-center fixed top-0 ">
          <div className="flex flex-col rounded-md border-gray-300 shadow-lg border-2 justify-center items-center bg-white gap-y-4 py-2 px-4">
            <div className="text-center text-red-500">Delete Task</div>
            <div className="flex gap-x-4">
              <button className="bg-gray-200 rounded-md px-2 py-1" onClick={handleDelete}>Cancel</button>
              <button className="bg-red-500 rounded-md px-2 py-1" onClick={() => deleteTask(documentId)}>Delete</button>
            </div>
          </div>
        </div>
      }

      <div className="w-full">
        <RxCross1 className="text-red-600 font-semibold text-xl float-right hover:cursor-pointer" onClick={() => setDelete(true)} />
      </div>

      {
        !deletee ?
          <Link to={`/addtask/${documentId}`}>
            <input className="bg-slate-800 text-lg font-medium text-white overflow-hidden w-full focus:outline-none hover:cursor-pointer" readOnly value={data[0]} type="text" />
            <textarea className="bg-slate-800 resize-none overflow-hidden text-base text-gray-300 w-full focus:outline-none hover:cursor-pointer" value={data[1]} readOnly name="" id="" cols="30" rows="4"></textarea>
            <div className="text-gray-400 text-sm">{date}, {time}</div>
          </Link> :
          <>
            <input className="bg-slate-800 text-lg font-medium text-white overflow-hidden w-full focus:outline-none hover:cursor-pointer" readOnly value={data[0]} type="text" />
            <textarea className="bg-slate-800 resize-none overflow-hidden text-base text-gray-300 w-full focus:outline-none hover:cursor-pointer" value={data[1]} readOnly name="" id="" cols="30" rows="4"></textarea>
            <div className="text-gray-400 text-sm">{date}, {time}</div>
          </>
      }
    </div>
  )
}

export default Post