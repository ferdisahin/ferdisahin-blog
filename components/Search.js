import { useState } from "react"
import {RiSearch2Line} from "react-icons/ri"

export default function Search(){
    const [searchFilter, setSearchFilter] = useState('');
    return (
      <>
        <form className="flex px-3 rounded-md bg-gray-100">
          <input
            type="text"
            placeholder="Arama Yap..."
            className="outline-none bg-transparent flex-1 h-10 text-gray-600"
            onChange={(e) => setSearchFilter(e.target.value)}            
          />
          <button className="shrink-0 text-gray-500">
            <RiSearch2Line />
          </button>
        </form>
      </>
    );
}