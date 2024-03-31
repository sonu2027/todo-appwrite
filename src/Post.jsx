
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

function Post({ data, documentId, deleteTask, date, time }) {

  return (
    
      <div className="flex flex-col gap-1 items-center justify-around bg-slate-800 px-3 py-2 rounded-md mt-2 w-40 custom-sm:w-44">

        <div className="w-full">
          <RxCross1 className="text-white text-xl float-right hover:cursor-pointer" onClick={() => deleteTask(documentId)} />
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