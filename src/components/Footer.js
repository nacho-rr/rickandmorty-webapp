import React from 'react'

const Footer = () => {
  
  const Fecha = new Date();

  return (
    <footer className="bg-teal-600 fixed inset-x-0 bottom-0">
      <div className="flex justify-between py-2 mx-20">
        <p className="text-white">José Ruiz - @nacho-rr</p>
        <p className="text-white">{`${Fecha.getUTCMonth() + 1}/${Fecha.getDate()}/${Fecha.getFullYear()}`}</p>
      </div>
    </footer>
  )
}

export default Footer
