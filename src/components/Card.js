import React from 'react'

const Card = ({ name, location, episode, getInfo, modal }) => {

  const { getInfoLoc, getInfoEpi } = getInfo;

  const handleClick = async () => {
    if(location){
      const { id } = location;
      modal(true)
      await getInfoLoc({
        variables: {
          id
        }
      });
    };

    if(episode){
      const { id } = episode;
      modal(true)
      await getInfoEpi({
        variables: {
          id
        }
      });
    };
  };

  return (
    <div className="w-full p-1">
      <div className="bg-white border rounded shadow cursor-pointer" onClick={() => handleClick()}>
        <h1 className="text-center py-2">{name}</h1>
        {location && <p className="text-center py-2">{location.dimension}</p>}
        {episode && <p className="text-center py-2">{episode.episode}</p>}
      </div>
    </div>
  )
}

export default Card
