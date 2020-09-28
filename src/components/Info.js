import React from 'react'
import CardCharacter from './CardCharacter'

const Info = ({ info }) => {

  return (
    <>
      {info.character && (
        <div className="m-4 mb-4">
          <div className="w-full flex flex-col items-center">
            <img className="rounded-md" src={info.character.image} alt={info.character.name} />
            <h1 className="font-bold text-xl mt-2">{info.character.name}</h1>
          </div>
          <div className="mx-5 mt-2">
            <p>Type: {info.character.type}</p>
            <p>Gender: {info.character.gender}</p>
            <p>Specie: {info.character.species}</p>
          </div>
        </div>
      )}

      {info.location && (
        <div className="m-4 mb-4">
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-xl mt-2">{info.location.name}</h1>
          </div>
          <div className="mx-5 my-2">
            <p>Type: {info.location.type}</p>
            <p>Dimension: {info.location.dimension}</p>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-4">
            {info.location.residents.map((resident, index) => {
              if(index <= 4) return <CardCharacter key={resident.id} character={resident} clickable={false} />
              return null
            })}
          </div>
        </div>
      )}

      {info.episode && (
        <div className="m-4 mb-4">
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-xl mt-2">{info.episode.name}</h1>
          </div>
          <div className="mx-5 my-2">
            <p>Release: {info.episode.air_date}</p>
            <p>Episode: {info.episode.episode}</p>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-4">
            {info.episode.characters.map((character, index) => {
              if(index <= 4) return <CardCharacter key={character.id} character={character} clickable={false} />
              return null
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Info
