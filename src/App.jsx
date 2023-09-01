import {useState} from 'react'
import Nav from "./components/Nav.jsx";
import ContentContainer from "./components/ContentContainer.jsx";
import Post from "./components/Post.jsx";
import Divider from "./components/Divider.jsx";

function App() {

    const [posts, setPost]= useState(
        [
            {
                id:1,
                user:"joker-jonesy",
                text:"This is my very first post",
                image:null
            },
            {
                id:2,
                user:"spashy",
                text:"this is my image",
                image:"https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
            }
        ]
    )

    return (
        <>

            <Nav/>

            <ContentContainer>
                {posts.map(i=>
                    <Post key={i.id} user={i.user} text={i.text} image={i.image}/>
                )}
            </ContentContainer>
            <Divider>
                <h1>This is my mission statement</h1>
            </Divider>
            <ContentContainer>
                {posts.map(i=>
                    <Post key={i.id} user={i.user} text={i.text} image={i.image}/>
                )}
            </ContentContainer>
            <footer></footer>
        </>
    )
}

export default App
