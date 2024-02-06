import React from 'react';

const ImageCard = ({ image }) => {

    const tags = image.tags.split(",");

    return (
        <section>
            <div className='relative rounded-lg overflow-hidden mt-6 mr-0 md:mt-8 md:mr-4 shadow-md bg-gray-50 w-[22rem] h-[30rem] border border-gray-300'>
                <img src={image.webformatURL} alt='' className='w-full h-64' />
                <div className='px-6 py-4'>
                    <div className='font-bold text-purple-500 text-xl mb-2'>
                        Photo by {image.user}
                    </div>
                    <ul className='text-gray-900'>
                        <li>
                            <i className="fa-solid fa-heart fa-sm mr-1" style={{ color: '#c82828' }}></i><span className='font-medium text-sm'>Likes: </span>
                            <span className='text-xs'>{image.likes}</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-eye fa-xs mr-1" style={{ color: '#46b7ce' }}></i><span className='font-medium text-sm'>Views: </span>
                            <span className='text-xs'>{image.views}</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-download fa-sm mr-1.5" style={{ color: '#adadad' }}></i><span className='font-medium text-sm'>Downloads: </span>
                            <span className='text-xs'>{image.downloads}</span>
                        </li>
                    </ul>
                </div>

                {/* Tags */}
                <div className='absolute bottom-0 left-0 px-6 py-4 space-y-2'>
                    {tags.map((tag, index) => (
                        <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-1'>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImageCard;
