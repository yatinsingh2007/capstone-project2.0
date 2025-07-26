import React from 'react'

function EditProfile() {
  return (
    <section className="bg-black text-white py-16" style={{ fontFamily: "'Sora', sans-serif" }}>
        <label htmlFor='workExperience' className="block text-sm font-medium mb-2">Add your work experience</label>
        <input id='workExperience' type='text' placeholder='e.g. Software Engineer at XYZ Corp' className="w-full p-2 rounded-md border border-gray-300 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

      
    </section>
  )
}

export default EditProfile
