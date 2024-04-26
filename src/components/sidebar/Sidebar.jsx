import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'
import useConversation from '../../zustand/useConversation'

const Sidebar = () => {
  const {selectedConversation}=useConversation();
  return (
    <div className=' p-4 flex flex-col bg-zinc-900  '>
      <SearchInput />
      <div className="divider px-1 "></div>
      <Conversations />
      <LogOutButton />
    </div>
  )
}

export default Sidebar