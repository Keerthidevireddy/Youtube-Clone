import React from 'react'
import Img from '../../components/lazyLoadImage/Img';
import { CgPlayList } from "react-icons/cg";
import { handleDayCount } from '../../utils/constant';
import { Link } from 'react-router-dom';

const PlayLists = ({itemData, index}) => {
    return (
        <Link>
            <div className='w-[19rem] sm:max-w-[17rem] md:max-w-[15rem] h-[10rem] sm:max-h-[12rem] rounded-lg relative '>
                <Img
                    className={` h-full w-full rounded-lg `}
                    src={
                        itemData?.snippet?.thumbnails?.maxres?.url
                        || itemData?.snippet?.thumbnails?.high?.url
                        || itemData?.snippet?.thumbnails?.medium?.url
                        || itemData?.snippet?.thumbnails?.default?.url
                        || itemData?.snippet?.thumbnails?.standard?.url
                    }
                />

                <div className=' absolute right-1 bottom-1 flex items-center bg-gray-800 text-gray-300 rounded-md p-1'>
                    <CgPlayList className=' text-xl'/>
                    <p className=' text-[.8rem]'>{itemData?.contentDetails?.itemCount} videos</p>
                </div>

                <div 
                    className='absolute left-1/2 -translate-x-1/2 -top-[.5rem] w-[90%] h-[4%] rounded-t-xl bg-center '
                    style={{
                        backgroundImage: `url(${
                            itemData?.snippet?.thumbnails?.maxres?.url
                            || itemData?.snippet?.thumbnails?.high?.url
                            || itemData?.snippet?.thumbnails?.medium?.url
                            || itemData?.snippet?.thumbnails?.default?.url
                            || itemData?.snippet?.thumbnails?.standard?.url
                        })`,
                        backdropFilter: blur,
                    }}
                />
            </div>

            <div className=' space-y-2 mt-2'>
                <div className=' line-clamp-1 font-bold text-sm max-w-[13rem] '>
                    <p>{itemData?.snippet?.title}</p>
                </div>
                <div className=' text-gray-400 text-[.9rem]'>
                    {handleDayCount(itemData?.snippet?.publishedAt)}
                    <p className=' text-[.8rem]'>View full playlist</p>
                </div>
            </div>
        </Link>
    )
}

export default PlayLists;
