import React from 'react'

const Error = ({ msg }) => {
  return (
    <div className="flex justify-center py-8">
      <span className="bg-white dark:text-white dark:bg-black p-8 mx-10 shadow-lg rounded-lg">
        <span className="font-black">Error:</span> {msg}
      </span>
    </div>
  )
}

export default Error
