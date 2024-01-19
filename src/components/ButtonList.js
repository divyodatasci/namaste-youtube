import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const buttons  =[
    {
        name: 'Vlogs',
        url: ''
    },
    {
        name: 'News',
        url: ''
    },
    {
        name: 'Trailers',
        url: ''
    },
    {
        name: 'DIY',
        url: ''
    },
    {
        name: 'Designing',
        url: ''
    },
    {
        name: 'Podcasts',
        url: ''
    },
    {
        name: 'Live',
        url: ''
    },
    {
        name: 'Sports',
        url: '',
    },
    {
        name: 'Music',
        url: ''
    },
    {
        name: 'Drama',
        url: ''
    },
    {
        name: 'Dance',
        url: ''
    },
    {
        name: 'Cartoon',
        url: ''
    },
    {
        name: 'Funny',
        url: ''
    },
    {
        name: 'Comedy',
        url: ''
    }
  ];

  return (
    <div className='flex'>
        {buttons.map((button) => <Button label = {button.name} url ={button.url} key = {button.name}/>)}
    </div>
  )
}

export default ButtonList