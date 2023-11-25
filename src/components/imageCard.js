import React from 'react';

const ImageCard = ({ image }) => {

    const tags = image.tags.split(",");

    return (
        <section className='fontStyle'>
            <div className='rounded-lg overflow-hidden shadow-xl bg-gray-100 w-[24rem] h-[32rem] border border-gray-300'>
                <img src={image.webformatURL} alt='' className='w-full h-64' />
                <div className='px-6 py-4'>
                    <div className='font-bold text-purple-500 text-xl mb-2'>
                        Photo by {image.user}
                    </div>
                    <ul className='text-gray-900'>
                        <li>
                            <i class="fa-solid fa-heart fa-sm mr-1" style={{ color: '#c82828' }}></i><span className='font-semibold text-sm'>Likes: </span>
                            <span className='text-xs'>{image.likes}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-eye fa-xs mr-1" style={{ color: '#90939d' }}></i><span className='font-semibold text-sm'>Views: </span>
                            <span className='text-xs'>{image.views}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-download fa-xs mr-1.5" style={{ color: '#90939d' }}></i><span className='font-semibold text-sm'>Downloads: </span>
                            <span className='text-xs'>{image.downloads}</span>
                        </li>
                    </ul>
                </div>

                {/* Tags */}
                <div className='px-6 py-4 space-y-2'>
                    {tags.map((tag, index) => (
                        <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImageCard;