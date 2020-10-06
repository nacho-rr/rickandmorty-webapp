import React from 'react'
import CardCharacter from './CardCharacter'

const Info = ({ info }) => {

  return (
    <>
      {(info.__typename === "Character") && (
        <div className="m-4 mb-4">
          <div className="w-full flex flex-col items-center">
            <img className="rounded-md" src={info.image} alt={info.name} />
            <h1 className="font-bold text-xl mt-2">{info.name}</h1>
          </div>
          <div className="mx-5 mt-2">
            <p>Type: {info.type}</p>
            <p>Gender: {info.gender}</p>
            <p>Specie: {info.species}</p>
          </div>
        </div>
      )}

      {(info.__typename === "Location") && (
        <div className="m-4 mb-4">
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-xl mt-2">{info.name}</h1>
          </div>
          <div className="mx-5 my-2">
            <p>Type: {info.type}</p>
            <p>Dimension: {info.dimension}</p>
            <h1 className="font-bold text-xl mt-2">Characters: </h1>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-4">
            {info.residents.map((resident, index) => {
              if((resident.id) && (index <= 4)) return <CardCharacter key={resident.id} character={resident} clickable={false} />
              return null
            })}
          </div>
        </div>
      )}

      {(info.__typename === "Episode") && (
        <div className="m-4 mb-4">
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-xl mt-2">{info.name}</h1>
          </div>
          <div className="mx-5 my-2">
            <p>Release: {info.air_date}</p>
            <p>Episode: {info.episode}</p>
            <h1 className="font-bold text-xl mt-2">Characters: </h1>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-4">
            {info.characters.map((character, index) => {
              if((character.id) && (index <= 4)) return <CardCharacter key={character.id} character={character} clickable={false} />
              return null
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Info
