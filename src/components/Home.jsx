import React from 'react'
import LoveMeter from './LoveMeter'
import { useNavigate } from 'react-router'

function Home() {
    let navigate = useNavigate();
    function goDetail() {
        navigate("/detail")
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen px-4 py-8 bg-red-400/50'>
            <LoveMeter />
            <button
                onClick={goDetail}
                className='cursor-pointer bg-rose-500 text-white font-bold scale-95 hover:scale-105 duration-500 ease-in-out rounded-xl px-4 py-3 mt-10 sm:mt-20 w-full sm:w-auto max-w-xs text-center'
            >
                Calculate Love
            </button>
        </div>
    )
}

export default Home