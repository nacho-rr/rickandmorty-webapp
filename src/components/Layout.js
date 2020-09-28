import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children, botton }) => {

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex min-h-screen">
        <Sidebar botton={botton} />
        <main className="sm:w-2/3 md:w-3/4 lg:w-4/5 p-5">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
