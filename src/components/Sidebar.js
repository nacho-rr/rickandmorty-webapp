import React from 'react';

const Sidebar = ({ botton }) => {

  const handlePush = (e) => {
    botton(e.target.value);
  }

  return (
    <aside className="bg-teal-600 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5">
      <div>
        <p className="text-white font-bold text-2xl">Rick and Morty</p>
        <nav className="mt-5 list-none">  
          <p className="text-white text-xl">Filters</p>
            <div className="my-2 ml-2">
              <input
                type="radio"
                name="filter"
                id="character"
                value="character"
                onChange={e => handlePush(e)} />
              <label htmlFor="character" className="text-white ml-2">Characters</label>
            </div>

            <div className="my-2 ml-2">
              <input
                type="radio"
                name="filter"
                id="location"
                value="location"
                onChange={e => handlePush(e)} />
              <label htmlFor="location" className="text-white ml-2">Locations</label>
            </div>

            <div className="my-2 ml-2">
              <input 
                type="radio"
                name="filter"
                id="episode"
                value="episode"
                onChange={e => handlePush(e)} />
              <label htmlFor="episode" className="text-white ml-2">Episodes</label>
            </div>

        </nav>
      </div>
    </aside>
  )
}

export default Sidebar