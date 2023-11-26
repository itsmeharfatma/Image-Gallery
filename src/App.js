import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import ScrollIndicator from './components/ScrollIndicator';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <section className='bg-gray-50'>
      <div className='container mx-auto py-16 fontStyle'>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>}
        {/* grid grid-cols-3 gap-4 */}
        {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : <div className='flex flex-wrap items-center justify-center'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>}
        <ScrollIndicator />
      </div>
    </section>
  );
}

export default App;
