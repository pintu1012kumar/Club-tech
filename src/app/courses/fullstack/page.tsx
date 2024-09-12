import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Full Stack Developer Roadmap</h1>
      <Link href="https://roadmap.sh/full-stack">
        <button
          className="text-2xl hover:text-blue-400 bg-red-600 text-white py-2 px-4 rounded"
          rel="noopener noreferrer"
        >
          Click Me
        </button>
      </Link>
    </div>
  )
}

export default page
