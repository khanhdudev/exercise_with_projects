import React from 'react'
import { FaSearch } from "react-icons/fa";
type Props = {
  className?: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined,
}

export default function SearchBox(props:Props) {
  return (
    <form
      className={`relative flex justify-center h-10 items-center ${props.className ?? ""}`}
      onSubmit={props.onSubmit}
    >
      <input type="text" placeholder='Search location...'
        value={props.value}
        onChange={props.onChange}
        className="px-4 py-2 w-[230px] border border-gray-300 focus:outline-none focus:border-blue-500 h-full rounded-l-md"
      />

      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full">
        <FaSearch />
      </button>
    </form>
  )
}