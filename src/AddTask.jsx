import React, { useState } from 'react';
import service from './appwrite/config';
import { TiTick } from "react-icons/ti";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector} from "react-redux";

function AddTask() {

    const userData=useSelector((state)=>state.auth.userData)
    console.log("I am able to access uedaea", userData);
    const [input, setInput] = useState("");
    const [textarea, setTextarea] = useState("");
    const [reqForUpdt, setReqForUpdt]=useState(false)

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleTextareaChange = (e) => {
        setTextarea(e.target.value);
    };

    const { documentId } = useParams()
    let documentIdData = documentId || 0

    console.log("useParams id: ", documentIdData);

    async function getFromDB() {
        await service.getPost("").then((data) => {
            console.log("data.documents or totalTask in addtask url", data.documents);
            console.log("accesing id: ", data.documents[0]["$id"]);

            data.documents.map((e) => {
                if (e["$id"] == documentId) {
                    setInput(e.todoTask)
                    setTextarea(e.content)
                    setReqForUpdt(true)
                }
            })
        })
    }

    useEffect(() => {
        if (documentId) {
            getFromDB()
        }
    }, [])


    const handleAddTask = async () => {
        if(reqForUpdt==true && userData!=null){
            await service.deleteTask(documentId)
        }
        if (input.length == 0) {
            alert("Title should not be empty")
            return
        }

        let lenOfWord = []
        let len = 0
        for (let i in input) {
            if (input[i] == " ") {
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
            setInput("");
            return
        }

        try {
            await service.createPost({ todoTask: input, content:textarea, userID:userData });
            setInput("");
            setTextarea("")
            console.log("Task added successfully!");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <div className='flex flex-col gap-y-3 h-screen'>
            <div className='flex   justify-between w-screen px-4 py-2'>
                <Link to="/">
                    <IoIosArrowRoundBack className='text-white text-4xl hover:cursor-pointer' />
                </Link>

                <TiTick onClick={handleAddTask} className='hover:cursor-pointer text-white text-4xl' />
            </div>

            <div className='flex flex-col pl-3 gap-y-4 h-full'>
                <input
                    className='focus:outline-none pl-1 bg-slate-900 caret-white
                    text-white
                    text-2xl'
                    onChange={handleInputChange}
                    value={input}
                    type="text"
                    placeholder='Title'
                />


                <textarea
                    placeholder='Start typing'

                    className='bg-slate-900 caret-white pl-1 text-white resize-none focus:outline-none
                    '
                    style={{
                        msOverflowStyle: "none",
                        scrollbarWidth: "none"
                    }}

                    onChange={handleTextareaChange}
                    value={textarea}
                    name="" id="" cols="30" rows="20">
                </textarea>

            </div>
        </div>
    );
}

export default AddTask