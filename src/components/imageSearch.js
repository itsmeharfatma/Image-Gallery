import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='max-w-sm rounded-full border border-1 border-teal-500 overflow-hidden mx-auto bg-gray-100 fontStyle'>
            <form onSubmit={onSubmit} className='w-full max-w-sm'>
                <div className='flex items-center py-1 px-1'>
                    <input onChange={e => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 px-2 leading-tight focus:outline-none' type='text' placeholder='Search Image Term...' />
                    <button className='bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white px-[7px] py-1 backdrop:px-2 rounded-full' type='submit'><span className=''><i className="fa-solid fa-magnifying-glass"></i></span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;