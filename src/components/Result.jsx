import React from 'react'
import LoveMeter from './LoveMeter'
import { useLocation, useNavigate } from 'react-router'
import { loveCalculator } from './calculation';

function Result() {
    const navigate = useNavigate()
    const location = useLocation();
    const data = location.state
    console.log(data)

    const result = loveCalculator(data)
    console.log(result)
    function goHome() {
        navigate('/detail')
    }

    const messages = [
        `The stars have whispered a secret: ${data.firstname}'s heart beats in harmony with ${data.secondname}'s at <span class="bg-white p-2 rounded m-2 font-bold text-red-500">${result}%</span> - a cosmic connection written in the constellations.`,

        `Like flowers turning to face the sun, ${data.firstname} and ${data.secondname} are drawn to each other with an undeniable pull of <span class="bg-white/50 p-2 rounded m-2 font-bold text-red-500">${result}%</span> - a love that blooms with quiet certainty.`,

        `In the grand tapestry of fate, the threads of ${data.firstname} and ${data.secondname} intertwine with a brilliant intensity of <span class="bg-white/50 p-2 rounded m-2 font-bold text-red-500">${result}%</span> - creating a pattern uniquely their own.`,

        `The universe has measured the chemistry between ${data.firstname} and ${data.secondname}, finding their souls resonate at <span class="bg-white/50 p-2 rounded m-2 font-bold text-red-500">${result}%</span> - a melody only they can truly hear.`,

        `Time stands still when ${data.firstname} and ${data.secondname} are together, their connection burning at <span class="bg-white/50 p-2 rounded m-2 font-bold text-red-500">${result}%</span> - each moment between them a small eternity.`
    ];

    return (
        <div className='flex justify-center flex-col items-center min-h-screen px-4 py-8 bg-red-400/50'>
            <div className='text-white w-full max-w-lg'>
                <LoveMeter className='relative z-0' />
                <div className='p-3 sm:p-5 m-2 sm:m-5 bg-black/50 shadow-xl shadow-red-500/50 rounded-xl'>
                    <h1
                        className='italic relative z-10 font-light text-sm sm:text-base md:text-lg text-wrap m-2 sm:m-5'
                        dangerouslySetInnerHTML={{
                            __html:
                                result > 80 ? messages[0] :
                                    result > 60 ? messages[1] :
                                        result > 40 ? messages[2] :
                                            result > 20 ? messages[3] :
                                                messages[4]
                        }}
                    />
                </div>
            </div>
            <button className='cursor-pointer bg-rose-500 text-white font-bold scale-95 hover:scale-105 duration-500 ease-in-out rounded-xl px-4 py-3 mt-10 sm:mt-20 w-full sm:w-auto max-w-xs text-center' onClick={goHome}>Explore More Love</button>
        </div>
    )
}

export default Result