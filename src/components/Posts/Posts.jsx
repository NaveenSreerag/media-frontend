import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getfollowingPosts } from '../../Actions/Posts'
import Loader from '../Loader/Loader'
import "../Posts/Posts.css"
import Share from '../Share/Share'
import Post from './Post/Post'

const Posts = () => {

    const dispacth = useDispatch();
    const { loading, posts } = useSelector(state => state.followingPosts)

    useEffect(() => {


        dispacth(getfollowingPosts())
    }, [dispacth])



    // const Posts = [
    //     // tempora ry
    //     {
    //         id: 1,
    //         userId: 1,

    //         profilePic: "https://images.pexels.com/photos/7188839/pexels-photo-7188839.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         name: "Sandra",
    //         img: "https://images.pexels.com/photos/7188839/pexels-photo-7188839.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, est."
    //     },
    //     {
    //         id: 2,
    //         userId: 2,

    //         name: "Rahul",
    //         profilePic: "https://images.pexels.com/photos/7166819/pexels-photo-7166819.jpeg?auto=compress&cs=tinysrgb&w=600",

    //         img: "https://images.pexels.com/photos/7166819/pexels-photo-7166819.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, est."

    //     },
    //     {
    //         id: 3,
    //         userId: 3,

    //         name: "John",
    //         profilePic: "https://images.pexels.com/photos/7038052/pexels-photo-7038052.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         img: "https://images.pexels.com/photos/7038052/pexels-photo-7038052.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, est."

    //     },
    //     {
    //         id: 4,
    //         userId: 4,

    //         name: "Saniya",
    //         profilePic: "https://images.pexels.com/photos/7038052/pexels-photo-7038052.jpeg?auto=compress&cs=tinysrgb&w=600",

    //         img: "https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, est."

    //     },
    //     {
    //         id: 5,
    //         userId: 5 ,

    //         name: "willy",
    //         profilePic: "https://images.pexels.com/photos/7038052/pexels-photo-7038052.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, est.",

    //         img: "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=600"

    //     },


    // ]
    return loading ? <Loader /> : (
        <div className='posts'>
            <Share />

            {  posts && posts.length > 0 ? (posts.map((post) => (
                <div className="post">
                    <Post post={post} key={post._id} loading={loading} />
                </div>
            ))) : <h1>No Posts Yet</h1>
            }
        </div>
    )
}

export default Posts