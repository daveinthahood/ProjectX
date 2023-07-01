import React from "react";
import Sidebar from "../Components/aside";
import Chat from "../Components/chat"
import Chats from "../Components/chats"


const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
                <Chats />

            </div>
        </div>


    )
}

export default Home;