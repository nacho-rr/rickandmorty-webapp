import React from 'react'

const Card = ({ location, episode, modal, info }) => {

  const handleClick = async () => {
    if(location){
      modal(true);
      info(location);
    };

    if(episode){
      modal(true);
      info(episode);
    };
  };

  return (
    <div className="w-full p-1">
      <div className="bg-white border rounded shadow cursor-pointer" onClick={() => handleClick()}>
        {location && <h1 className="text-center py-2">{location.name}</h1>}
        {episode && <h1 className="text-center py-2">{episode.name}</h1>}

        {location && <p className="text-center py-2">{location.dimension}</p>}
        {episode && <p className="text-center py-2">{episode.episode}</p>}
      </div>
    </div>
  )
}

export default Card
