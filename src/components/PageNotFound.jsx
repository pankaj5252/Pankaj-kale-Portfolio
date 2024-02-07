import React from 'react'
import {NavLink} from "react-router-dom"

const PageNotFound = () => {
  return (
  <>
   <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink to="/" className="relative btn-about py-2 px-8 text-base font-bold nded-full overflow-hidden bg-red text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
               GO TO BACK
                </NavLink>
          </div>
        </div>
      </main>
  </>
  )
}

export default PageNotFound