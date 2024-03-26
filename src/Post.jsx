
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

function Post({ data, documentId, deleteTask }) {

  return (
    
      <div className="flex flex-col gap-1 items-center justify-around bg-slate-800 px-3 py-2 rounded-md mt-2 w-40 custom-sm:w-44">

        <div className="w-full">
          <RxCross1 className="text-white text-xl float-right" onClick={() => deleteTask(documentId)} />
        </div>

        <Link to={`/addtask/${documentId}`}>
        <input className="bg-slate-800 text-lg font-medium text-white overflow-hidden w-full" readOnly value={data[0]} type="text" />
        <textarea className="bg-slate-800 resize-none overflow-hidden text-base text-gray-400 w-full" value={data[1]} readOnly name="" id="" cols="30" rows="5"></textarea>
        </Link>
        </div>
      )
}

export default Post