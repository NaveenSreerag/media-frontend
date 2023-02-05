import React from 'react'
import "../Stories/Stories.css"

const Stories = () => {

    const stories = [
        // tempora ry
        {
            id: 1,
            name: "Sandra",
            img: "https://images.pexels.com/photos/7188839/pexels-photo-7188839.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id: 2,
            name: "Rahul",
            img: "https://images.pexels.com/photos/7166819/pexels-photo-7166819.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id: 3,
            name: "John",
            img: "https://images.pexels.com/photos/7038052/pexels-photo-7038052.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id: 4,
            name: "Saniya",
            img: "https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id: 5,
            name: "willy",
            img: "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id: 6,
            name: "Rona",
            img: "https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id: 7,
            name: "Juliana",
            img: "https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id: 8,
            name: "Doe",
            img: "https://images.pexels.com/photos/6943429/pexels-photo-6943429.jpeg?auto=compress&cs=tinysrgb&w=600"

        },

    ]

    const currentUser={
        name:"You",
        img: "https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
    return (
        <div className="stories">

            <div className="story">
                <img src={currentUser.img} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story">
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}

        </div>
    )
}

export default Stories