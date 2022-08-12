import React from 'react'
import { useState } from 'react';
import Data from "./Data"


const ImgCard = () => {

    // state for collecting data of photos
    const [photos, setPhotos] = useState(Data);

    // function for filtering photos
    const filterButton = (idValue) => {
        const filterPhotos = Data.filter((ce) => {
            return ce.category === idValue;
        });
        setPhotos(filterPhotos);
    }

    const[rmv,setRmv] = useState(true);

    // read more state
    const [readMore, setReadMore] = useState(false);


    return (
        <>

            {/* buttons main div */}
            <div id="buttonsDiv" className='flex justify-evenly items-center mt-8 dark:mt-0 dark:pt-12 w-full'>
                <button onClick={() => filterButton("minimilist")} className='bg-purple-800 text-white rounded-md font-sans shadow-gray-400 shadow-lg text-lg px-3 dark:shadow-none py-2'>minimilist</button>
                <button onClick={() => filterButton("natural")} className='bg-purple-800 text-white rounded-md font-sans shadow-gray-400 shadow-lg text-lg px-3 dark:shadow-none py-2'>natural</button>
                <button onClick={() => filterButton("classic")} className='bg-purple-800 text-white rounded-md font-sans shadow-gray-400 shadow-lg text-lg px-3 dark:shadow-none py-2'>classic</button>
            </div>



            {/* all in one card main div */}
            <div>
            {
                rmv?photos.map((cv, index,id) => {
                    const { img, name, description, price} = cv;
                    return <>
                        <div className='h-[65vh] w-[90%] mx-auto bg-purple-200 mt-10' key={index} >
                            <img className='p-3 h-[25vh] w-[100%] mx-auto' src={img} alt={img} />
                            <p className='text-center text-lg'>{name}</p>
                            {/* para div */}
                            <div className='flex p-4 m-3 text-lg justify-center items-center bg-purple-800 text-white '>
                                <p className='text-center'>{readMore ? description : `${description.substring(0, 40)}...`}
                                    <button className='font-bold border-b border-white' onClick={() => setReadMore(!readMore)}>
                                        {readMore ? "Show Less" : "Show More"}
                                    </button>
                                </p>
                            </div>
                            {/* para div ends */}
                            <p onClick={()=>setRmv(!rmv)} className='text-center cursor-pointer font-bold text-purple-800 tracking-[0.2rem] pt-4'>{price}</p>
                        </div>
                    </>
                }):""
            } 
            
            </div>

        </>
    );
}

export default ImgCard;









