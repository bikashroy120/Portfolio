import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-4 max-w-[1200px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Layout