import React, { useState } from 'react';

const ImageSearch = ({ setTerm }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setTerm(text);
    }

    return (
        <div className='flex flex-1 justify-between items-center px-4'>
            <div>
                <img
                    src='/asset/pixie-logo.png'
                    alt='Logo'
                    width={120}
                    height={29}
                    className='max-sm:w-[100px]'
                />
            </div>
            <div className='w-1/2 md:w-1/3 rounded-full border border-1 border-teal-500 overflow-hidden bg-gray-100'>
                <form onSubmit={onSubmit} className='w-full max-w-lg'>
                    <div className='flex items-center py-1 px-1'>
                        <input onChange={e => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 px-4 leading-tight focus:outline-none' type='text' placeholder='Search Image Term...' />
                        <button className='bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white px-[7px] py-1 backdrop:px-2 rounded-full' type='submit'><span className=''><i className="fa-solid fa-magnifying-glass"></i></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ImageSearch;
