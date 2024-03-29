import React from 'react'

const VideoCard = ({info}) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div>
      <div className="p-2 m-2 w-72">
        <img className="shadow-lg rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
    </div>
    </div>
  )
}

export default VideoCard