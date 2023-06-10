import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-4 md:px-16 lg:px-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout