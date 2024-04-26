import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (

        <div className='flex sm:h-[450px] md:h-[550px]  overflow-hidden shadow-2xl shadow-black bg-transparent rounded-md   stone-500 '>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home


/* <div className='flex sm:h-[450px] md:h-[550px] overflow-hiddenshadow-xl bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40'> */ 