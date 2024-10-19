import React from 'react'
import {Link} from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
const NotFoundPage = () => {
  return (
   <>
    <nav class="bg-indigo-700 border-b border-indigo-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <Link class="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img class="h-10 w-auto" src="images/logo.png" alt="React Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </Link>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <Link
                  href="/index.html"
                  class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</Link
                >
                <Link
                  href="/jobs.html"
                  class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</Link
                >
                <Link
                  href="/add-job.html"
                  class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</Link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="text-center flex flex-col justify-center items-center h-96">
     <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <Link
        href="/index.html"
        class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back</Link
      >
    </section>
   </>
  )
}

export default NotFoundPage