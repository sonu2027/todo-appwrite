import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { logout } from './store/authSlice';

function Search({ totalTask, setTotalTask, getFromDB }) {
    const [search, setSearch] = useState("")
    const [showBarItem, setShowBarItem] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        // const task=[]
        if (search.length > 0) {
            let task = totalTask.filter((e) => e.todoTask.slice(0, search.length).toUpperCase() == search.toUpperCase())
            setTotalTask([...task])
        }
        else {
            getFromDB()
        }
    }, [search])

    return (
        <div className="sticky top-0 bg-slate-900 flex justify-around items-center w-screen pb-4 pt-3">

            {
                showBarItem && <div className='h-screen overflow-y-hidden w-1/2 bg-white z-10 fixed bottom-0 left-0'>
                    <RxCross1 className="text-black font-medium text-xl hover:cursor-pointer m-3" onClick={() => setShowBarItem(false)} />
                    <ul className='mt-4 '>
                        <li className='text-black text-center w-full list-none border-x-0 border-b-0 border-gray-400 border-2 border-solid py-1'>My Profile</li>

                        <li  className='text-black text-center w-full list-none border-x-0 border-b-0 border-gray-400 border-2 border-solid py-1'>Update Password</li>

                        <li onClick={() => dispatch(logout())} className='text-black text-center w-full list-none border-x-0 border-gray-400 border-2 border-solid py-1'>Logout</li>
                    </ul>
                </div>
            }

            <FaBarsStaggered onClick={() => setShowBarItem(true)} className='text-white text-2xl sm:hidden' />

            <div className="bg-slate-500 flex h-9 w-5/6 sm:w-4/6 md:w-3/6 xl:w-3/6 xl:h-12 items-center rounded-3xl">
                <CiSearch className="text-3xl text-white pl-1" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search notes" className="focus:outline-none text-white caret-white bg-slate-500 w-11/12 pr-4 pl-2 rounded-3xl" type="text" />
            </div>
        </div>
    )
}

export default Search