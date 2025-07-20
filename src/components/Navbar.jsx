import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100">
        <h1 className="font-bold text-lg px-4 py-2 rounded-2xl bg-[#1c1c1c] text-white">Roshi</h1>
        <div className="text-xl font-bold text-[#1c1c1c]">☰</div>
    </div>
  )
}

export default Navbar
