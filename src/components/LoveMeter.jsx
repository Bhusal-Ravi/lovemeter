import React, { useState } from 'react'

function LoveMeter() {
    const [heart, setHeart] = useState([])

    function createHeart() {
        const id = Date.now();
        const leftPosn = Math.floor(Math.random() * 100);
        const rightPosn = Math.floor(Math.random() * 100);

        setHeart((prevHeart) => [...prevHeart, { id, leftPosn, rightPosn }])

        setTimeout(() => {
            setHeart(prevHearts => prevHearts.filter(heart => heart.id !== id));
        }, 2000);
    }

    function handleHover() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createHeart(), i * 100)
        }
    }

    return (
        <div className='flex justify-center items-center relative w-full max-w-2xl mx-auto'>

            <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
                <img
                    className='absolute z-0 h-auto w-full sm:w-4/5 lg:w-3/4 max-w-md -left-1/4 sm:-left-20 lg:-left-24 top-1/4 sm:top-1/3 -translate-y-1/2 rotate-30 animate-pulse filter drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]'
                    src='/rose.png'
                    alt="Left rose"
                />
                <img
                    className='absolute z-0 h-auto w-full sm:w-4/5 lg:w-3/4 max-w-md -right-1/4 sm:-right-20 lg:-right-24 top-1/4 sm:top-1/3 -translate-y-1/2 rotate-335 animate-pulse filter drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]'
                    src='/rose.png'
                    alt="Right rose"
                />
            </div>


            <div className='relative z-10 flex justify-center items-center font-bold bg-black/50 p-3 sm:p-5 rounded-xl border border-red-600 shadow-xl shadow-red-500/50 w-full max-w-xs mx-auto mb-10 sm:mb-16'>
                <h1 className='text-xl md:text-3xl lg:text-5xl z-0 text-white whitespace-nowrap'>
                    L<span className='motion-safe:animate-ping size-3 rounded-full opacity-100'>❤️</span>ve
                    <span onMouseEnter={handleHover} className='underline text-rose-500 ml-1 decoration-rose-500'>Meter</span>
                </h1>
                {heart.map((ht) => (
                    <div
                        className='fixed z-20 animate-bounce text-4xl'
                        key={ht.id}
                        style={{
                            left: `${ht.leftPosn}%`,
                            top: `${ht.rightPosn}%`,
                            fontSize: '2rem',
                            animation: 'bounce 1s infinite,fadeOut 2s ease-out forwards'
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoveMeter
