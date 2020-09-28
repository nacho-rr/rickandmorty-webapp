import React from 'react';
import '../styles/spinner.css';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full pb-10">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
         <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  )
}

export default Spinner;