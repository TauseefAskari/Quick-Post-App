import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL

const CreatePost = () => {

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        await axios.post(`${apiUrl}/create-post`, formData)
        .then((response) => {
            
            navigate('/feed');

        })
        .catch((error) => {
            console.error('Error creating post:', error);
        });
    };



  return (
   <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>

            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' placeholder='Enter caption' required />
            <button type='submit'>Submit</button>

        </form>
   </section>
  )
}

export default CreatePost
