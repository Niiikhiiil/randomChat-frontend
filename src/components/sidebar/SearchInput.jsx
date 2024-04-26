import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    
    if (search.length < 3) {
      return toast.error("Please enter at least 3 character long word");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("")
    } else toast.error("No user found!");
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input
        type="text"
        className='input  rounded-full bg-black text-white'
        placeholder='Search here...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className='btn btn-circle bg-black text-white border-none hover:text-black'>
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchInput