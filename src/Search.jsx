import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

function Search({totalTask, setTotalTask, getFromDB}) {
    const [search, setSearch]=useState("")
    useEffect(()=>{
        // const task=[]
        if(search.length>0){
            let task=totalTask.filter((e)=>e.todoTask.slice(0, search.length).toUpperCase() == search.toUpperCase())
            setTotalTask([...task])
        }
        else{
            getFromDB()
        }
    }, [search])
    return (
        <div className="sticky top-0 bg-slate-900 flex justify-center items-center w-screen pb-4 pt-3">
            <div className="bg-slate-500 flex h-9 w-5/6 sm:w-4/6 md:w-3/6 xl:w-3/6 xl:h-12 items-center rounded-3xl">
                <CiSearch className="text-3xl text-white pl-1" />
                <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search notes" className="focus:outline-none text-white caret-white bg-slate-500 w-11/12 pr-4 pl-2 rounded-3xl" type="text" />
            </div>
        </div>
    )
}

export default Search