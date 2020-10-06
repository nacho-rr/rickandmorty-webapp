import React from 'react'

const CardCharacter = ({ character, modal, clickable, info }) => {
  
  const { name, image } = character;

  const handleClick = async () => {
    modal(true);
    info(character);
  };
  
  return (
    <div className="w-full p-1">
      <div 
        className={clickable ? "bg-white border rounded shadow cursor-pointer" : "bg-white border rounded shadow"}
        onClick={() => {if(clickable) return handleClick()}}
      >
        <img src={image} alt={name} className="rounded" />
        <p className="text-center py-2">{name}</p>
      </div>
    </div>
  )
}

export default CardCharacter
