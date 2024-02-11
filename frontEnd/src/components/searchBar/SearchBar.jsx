import './SearchBar.css';
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '../../lib/data';

function Searchbar() {
  const [activeSearch, setActiveSearch] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(words.filter((w) => w.includes(e.target.value)).slice(0, 8));
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on: ${item}`);
  };

  const handleDocumentClick = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setActiveSearch([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className='searchForm'>
      <form className='w-[500px] relative'>
        <div className='relative' ref={searchRef}>
          <input
            type='search'
            placeholder='Escribe aquí lo que deseas buscar'
            className='w-full p-4 rounded-full bg-slate-800 search-box'
            onChange={(e) => handleSearch(e)}
          />
          <button className='search-btn'>
            <AiOutlineSearch />
          </button>
        </div>

        {activeSearch.length > 0 && (
          <div className='resultados-bar'>
            {activeSearch.map((s) => (
              <span key={s} onClick={() => handleItemClick(s)}>
                {s}
              </span>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default Searchbar;
