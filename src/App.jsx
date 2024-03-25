import React, { useState, useEffect } from 'react';
import service from './appwrite/config';
import Post from './Post';
import { MdLibraryAdd } from "react-icons/md";

function App() {

  const [task, setTask] = useState("");
  const [totalTask, setTotalTask] = useState({})

  async function getFromDB() {
    await service.getPost("").then((data) => {
      const x = data.documents
      if (x.length < 1) {
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

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };


  const handleAddTask = async () => {

    if (task.length == 0) {
      alert("Input field should not be empty")
      setTask("");
      return
    }

    let lenOfWord = []
    let len = 0
    for (let i in task) {
      if (task[i] == " ") {
        lenOfWord.push(len)
        len = 0
        continue;
      }
      len++
    }
    lenOfWord.push(len)

    let count = 0
    console.log("count is:", count, typeof (count), lenOfWord);
    for (let e of lenOfWord) {
      if (Number(e) > count) {
        count = e;
      }
    }

    if (count > 20) {
      alert("Maximum character of a word should be below 21")
      setTask("");
      return
    }

    try {
      await service.createPost({ todoTask: task });
      setTask("");
      getFromDB()
      console.log("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    await service.deleteTask(id)
    getFromDB()
  }

  return (
    <div className='flex flex-col justify-center items-center  gap-y-3'>
      <div className='rounded-sm flex justify-center h-8 mb-4 items-center gap-x-2 pr-2 mt-6 bg-white'>
        <input
          className='focus:outline-none pl-1'
          onChange={handleInputChange}
          value={task}
          type="text"
          placeholder='Write your task'
        />

        <MdLibraryAdd onClick={handleAddTask} className='text-green-500 text-xl' />
      </div>
      {
        totalTask.length > 0 ?
          <>
            <h2 className='text-red-600'>To-Do</h2>
            {totalTask.map((e) =>
              <Post key={e["$id"]} data={e.todoTask} documentId={e["$id"]} deleteTask={deleteTask} />
            )}
          </>
          :
          <>
            <div style={{ color: "red" }}>Add your task</div>
          </>
      }
    </div>
  );
}

export default App;
