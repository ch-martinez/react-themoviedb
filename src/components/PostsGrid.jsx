// import axios from 'axios'
import { PostCard } from './PostCard'
import { getDataAPI } from "../utils/APIConnect"
import { useState, useEffect } from 'react'

export const PostsGrid = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        getDataAPI('/discover/movie').then((data) => {
            setPosts(data.results)
        })
    }, [])

    return(
        <>
            <ul className='posts-grid'>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </ul>
        </>
    )
}