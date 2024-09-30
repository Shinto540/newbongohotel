import React from 'react'




function shadform() {
  return (
<div className="flex items-center justify-between text-black p-4 space-x-4 rounded-lg">
  {/* Item 1 */}
  <div className="text-black font-bold  border-yellow-700 border-2 hover:border-dashed p-2 rounded">
    Location 2
  </div>

  {/* Item 2 */}
  <div className="text-black font-bold  border-yellow-700 border-2 hover:border-dashed p-2 rounded">
    Date (For Check in and Check Out)
  </div>

  {/* Item 3 */}
  <div className="text-black font-bold  border-yellow-700 border-2 hover:border-dashed p-2 rounded">
    Adults. Children . Rooms
  </div>

  {/* Search Button */}
  <div className=" p-2 rounded">
    <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
      Search
    </button>
  </div>
</div>

  )
}

export default shadform
