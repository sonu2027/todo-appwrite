import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import service from './appwrite/config';
import Post from "./Post";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/authSlice";

function App() {

  // const userData=useSelector((s)=>s.auth.userData)
  const userData = useSelector((state) => state.auth.userData)
  console.log("User data in app: ", userData);

  const [totalTask, setTotalTask] = useState({})

  async function getFromDB() {
    if (userData == null) {
      return
    }
    await service.getPost("").then((data) => {
      let x = data.documents
      if (x.length < 1) {
        setTotalTask([])
        return
      }
      const date = new Date(data.documents[0]["$createdAt"])
      // console.log("date: ", date.toLocaleDateString());
      x = x.filter((e) => e.userID == userData)
      setTotalTask((state) => [...x])
      console.log("data.documents or totalTask", data.documents);
      console.log("craetedAt", date.toLocaleDateString());
      console.log(new Date(data.documents[0]["$createdAt"]).toLocaleDateString());
      console.log("accesing id: ", data.documents[0]["$id"]);
    })
  }

  useEffect(() => {
    getFromDB()
  }, [])

  const deleteTask = async (id) => {
    await service.deleteTask(id)
    getFromDB()
  }

  const dispatch = useDispatch()

  return (
    userData != null &&
    <div className="h-screen w-screen">
      <Search totalTask={totalTask} setTotalTask={setTotalTask} getFromDB={getFromDB} />
      <Link to="/addtask">
        <IoMdAddCircle className='text-yellow-400 text-4xl fixed bottom-8 right-8 ' />
      </Link>

      <button onClick={() => dispatch(logout())} className='bg-red-500 rounded-sm px-2 py-1 fixed right-8 top-14 text-white'>Logout</button>

      {
        totalTask.length > 0 &&
        <div className="flex justify-center pb-6 md:mt-0 mt-8">
          <div className="grid grid-cols-2 gap-3">
            {totalTask.map((e) =>
              <Post key={e["$id"]} data={[e.todoTask, e.content]} documentId={e["$id"]} deleteTask={deleteTask} date={new Date(e["$createdAt"]).toLocaleDateString()} />
            )}
          </div>
        </div>
      }

    </div>
  )
}

export default App;
