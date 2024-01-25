import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API_URL } from '../utils/Constants'

const VideoContainer = () => {
    const [videoItems, setVideoItems] = useState([]);
    useEffect(()=> {
        getVideos();
    }, []);
    const getVideos = async()=> {
        const response = await fetch(YOUTUBE_API_URL);
        const data = await response.json();
        const { items } = data;
        setVideoItems(items);
    }
        
    return (
        <div className='flex flex-wrap'>
           {videoItems.map((item)=> {
            return (<VideoCard info ={item}/>);
           })} 
        </div>
        
    )
}

export default VideoContainer