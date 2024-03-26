import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import service from './appwrite/config';
import Post from "./Post";
import Search from "./Search";

function App() {

  const [totalTask, setTotalTask] = useState({})

  async function getFromDB() {
    await service.getPost("").then((data) => {
      const x = data.documents
      if (x.length < 1) {
        setTotalTask([])
        return
      }
      setTotalTask((state) => [...x])
      console.log("data.documents or totalTask", data.documents);
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


  return (
    <div className="h-screen w-screen">
      <Search totalTask={totalTask} setTotalTask={setTotalTask} getFromDB={getFromDB}/>
      <Link to="/addtask">
        <IoMdAddCircle className='text-yellow-400 text-4xl fixed bottom-8 right-8 ' />
      </Link>

      {
        totalTask.length > 0 &&
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-3">
            {totalTask.map((e) =>
              <Post key={e["$id"]} data={[e.todoTask, e.content]} documentId={e["$id"]} deleteTask={deleteTask} />
            )}
          </div>
        </div>
      }

    </div>
  )
}

export default App;
