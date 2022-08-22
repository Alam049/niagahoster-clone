import React, { useState } from 'react'

const TimerPromo = ({setTimePromo}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = setTimePromo;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            {/*  */}
            <div className='flex gap-2 text-center pl-4 pt-8 md:pl-10 xl:pl-8 xl:gap-3'>
        <div>
        <p className='bg-white rounded-md py-3 px-4 text-2xl font-medium xl:text-3xl xl:py-3.5'>00</p>
        <p className='text-white mt-1'>Hari</p>
        </div>
        <span className='text-slate-100 text-3xl font-bold mt-2'>:</span>
        <div>
        <p className='bg-white rounded-md py-3 px-4 text-2xl font-medium xl:text-3xl xl:py-3.5'>{`${hrs.toString().padStart(2, '0')}`}</p>
        <p className='text-white mt-1'>Jam</p>
        </div>
        <span className='text-slate-100 text-3xl font-bold mt-2'>:</span>
        <div>
        <p className='bg-white rounded-md py-3 px-4 text-2xl font-medium xl:text-3xl xl:py-3.5'>{`${mins.toString().padStart(2, '0')}`}</p>
        <p className='text-white mt-1'>Menit</p>
        </div>
        <span className='text-slate-100 text-3xl font-bold mt-2'>:</span>
        <div>
        <p className='bg-white rounded-md py-3 px-4 text-2xl font-medium xl:text-3xl xl:py-3.5'>{`${secs.toString().padStart(2, '0')}`}</p>
        <p className='text-white mt-1'>Detik</p>
        </div>
    </div>
        </div>
    );
}

export default TimerPromo;