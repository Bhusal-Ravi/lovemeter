import React from 'react'
import LoveMeter from './LoveMeter'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router';

function Detail() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    function onSubmit(data) {
        console.log(data)
        navigate('/result', { state: data })
    }

    return (
        <div className='flex justify-center items-center min-h-screen py-8 px-4 bg-red-400/50'>
            <div className='w-full max-w-md'>
                <LoveMeter className='relative z-0' />

                <div className='relative mt-10 sm:mt-20 flex justify-center items-center bg-white/50 shadow-xl shadow-red-500/50 p-4 sm:p-5 w-full rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex flex-col sm:flex-row w-full gap-2'>
                                <div className='w-full'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                                        Your Name
                                    </label>
                                    <input
                                        id="firstname"
                                        className={`w-full px-3 py-2 border rounded-md ${errors.firstname ? 'border-red-500' : 'border-black'}`}
                                        {...register("firstname", { required: "Name is required" })}
                                    />
                                    {errors.firstname && (
                                        <p className="text-red-500 text-xs mt-1">{errors.firstname.message}</p>
                                    )}
                                </div>
                                <p className='hidden sm:block text-red-500 translate-y-7 font-bold text-2xl'>+</p>
                                <p className='block sm:hidden text-red-500 my-2 text-center font-bold text-2xl'>+</p>
                                <div className='w-full'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="secondname">
                                        Lover's Name
                                    </label>
                                    <input
                                        id="secondname"
                                        className={`w-full px-3 py-2 border rounded-md ${errors.secondname ? 'border-red-500' : 'border-black'}`}
                                        {...register("secondname", { required: "Name is required" })}
                                    />
                                    {errors.secondname && (
                                        <p className="text-red-500 text-xs mt-1">{errors.secondname.message}</p>
                                    )}
                                </div>
                            </div>
                            <button className='cursor-pointer bg-rose-500 text-white font-bold scale-95 hover:scale-100 duration-500 ease-in-out rounded-xl p-3 mt-6 sm:mt-10 w-full sm:w-auto'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Detail