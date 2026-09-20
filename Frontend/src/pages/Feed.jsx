import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const Feed = () => {

    const [posts, setPosts] = useState([
      {  _id:"1",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81bNIEaGCzdwl2QV5sIrD4JXpsyk1smkr4psQ6MhDvA8lGy5_6Y4sEyk&s=10",
        caption:"A beautiful sunset over the mountains."
      },           
    ])

    useEffect(() => {
        axios.get(`${apiUrl}/posts`)
        .then((response) => {
            setPosts(response.data.post)
        })
        .catch((error) => {
            console.error('Error fetching posts:', error);
        });
    }, [])

    
  return (

    <section className='feed-section'>

        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available.</h1>
            )
        }
    </section>
    
  )
}

export default Feed
