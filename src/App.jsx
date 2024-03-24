import React, { useState, useEffect } from 'react';
import service from './appwrite/config';
import PostData from './PostData';
import { MdLibraryAdd } from "react-icons/md";

function App() {
  const [task, setTask] = useState("");

  const [totalTask, setTotalTask] = useState([])

  async function getFromDB() {
    const tasks = []
    await service.getPost("").then((data) => {
      return data.documents
    }).then((data) => {
      console.log("Data ", data);
      data.map((e) => {
        console.log(e.todoTask);
        let x = ""
        let str = e.todoTask
        for (let i in str) {
          if (str[i] == "-") {
            x += " "
          }
          else {
            x += str[i]
          }
        }
        tasks.push(x)
      });
    })
    setTotalTask(() => [...tasks])
  }

  useEffect(() => {
    getFromDB()
  }, [])

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = async () => {

    if(task.length==0){
      alert("Input field should not be empty")
      setTask("");
      return
    }
    else if (task.length>36){
      alert("Please enter character below 36")
      setTask("");
      return
    }
    let lenOfWord=[]
    let len=0
    for(let i in task){
      if(task[i]==" "){
        lenOfWord.push(len)
        len=0
        continue;
      }
      len++
    }
    lenOfWord.push(len)

    let count=0
    console.log("count is:", count, typeof(count), lenOfWord);
    for(let e of lenOfWord){
      if(Number(e)>count){
        count=e;
      }
    }

    if(count>20){
      alert("Maximum character of a word should be below 21")
      setTask("");
      return
    }

    try {
      let x = ""
      for (let i in task) {
        if (task[i] == " ") {
          x += "-"
        }
        else {
          x += task[i]
        }
      }
      await service.createPost({ todoTask: x, slug: x });
      // Assuming you want to clear the input after adding task
      setTask("");
      getFromDB()
      console.log("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (data) => {
    console.log("data in deleteTask", data)
    let x = ""
    for (let i in data) {
      if (data[i] == " ") {
        x += "-"
      }
      else {
        x += data[i]
      }
    }
    console.log("x in deleteTask", x)
    await service.deleteTask(x)
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

        <MdLibraryAdd onClick={handleAddTask} className='text-green-500 text-xl'/>
      </div>
      {
        totalTask.length > 0 ?
          <>
          <h2 className='text-red-600'>To-Do</h2>
            {totalTask.map((e) =>
              <PostData key={e} data={e} deleteTask={deleteTask} />
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
