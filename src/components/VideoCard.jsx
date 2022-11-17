import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {xs: '100%',sm:'358px', md: '320px'}, boxShadow:'none', borderRadius: 0}}>
      <Link to={`/video/${videoId}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width: {xs:'100%', sm: '358px', md: '350px'}, height:180}}/>
      </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
          <Link to={`/video/${videoId}`}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">{snippet?.title.slice(0,60)}</Typography>
          </Link>
          <Link to={`/channel/${snippet?.channelId}`}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">{snippet?.channelTitle}</Typography>
          </Link>
        </CardContent>
      </Card> 
  )
}

export default VideoCard