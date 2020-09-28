import React from 'react';

const Pagination = ({ page, data, getData, variables }) => {

  const { getCharacter, getLocation, getEpisode } = getData;

  const handleClick = async e => {
    e.preventDefault();

    if(data.characters){
      await getCharacter({
        variables: {
          page,
          filter: variables.filter
        }
      })
    }

    if(data.locations){
      await getLocation({
        variables: {
          page,
          filter: variables.filter
        }
      })
    }

    if(data.episodes){
      await getEpisode({
        variables: {
          page,
          filter: variables.filter
        }
      })
    }
  };

  return (
    <>
    {(data && data.characters)  && (
      <button
        className={page === (data.characters.info.prev + 1) ?
          "px-2 py-1 bg-teal-800 h-full mt-5 mb-8 border rounded" :
          "px-2 py-1 bg-teal-600 h-full mt-5 mb-8 border rounded hover:bg-teal-400"}
        value={page}
        onClick={(e) => handleClick(e)}>
        {page}
      </button>
    )}

    {(data && data.locations) && (
      <button
        className={page === (data.locations.info.prev + 1) ?
          "px-2 py-1 bg-teal-800 h-full mt-5 mb-8 border rounded" :
          "px-2 py-1 bg-teal-600 h-full mt-5 mb-8 border rounded hover:bg-teal-400"}
        value={page}
        onClick={(e) => handleClick(e)}>
        {page}
      </button>
    )}

    {(data && data.episodes) && (
      <button
        className={page === (data.episodes.info.prev + 1) ?
          "px-2 py-1 bg-teal-800 h-full mt-5 mb-8 border rounded text-white" :
          "px-2 py-1 bg-teal-600 h-full mt-5 mb-8 border rounded hover:bg-teal-400 text-white"}
        value={page}
        onClick={(e) => handleClick(e)}>
        {page}
      </button>
    )}
    </>
  )
}

export default Pagination
