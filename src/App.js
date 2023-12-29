import React, { useState, useEffect } from 'react';
// import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <section>
      <div className='max-container mx-auto py-12 fontStyle'>
        <ImageSearch setTerm={setTerm} />

        {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-44 mb-56'>No Images Found...</h1>}
        
        {/* {isLoading ? <h1 className='text-6xl text-center mx-auto mt-44 mb-56'>Loading...</h1> : <div className='flex flex-wrap items-center justify-center'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>} */}

        <ScrollIndicator />

        <ScrollToTop smooth top="20" className="override" style={{ borderRadius: "25px", backgroundColor: '#1c8a65' }} component={<i class="fa-solid fa-arrow-up fa-lg" style={{ color: "white" }}></i>} />
      </div>
    </section>
  );
}

export default App;
