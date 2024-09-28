// const Policies = () => {
//     return (
//       <div className="bg-gray-100 p-6 mb-6">
//         <h2 className="text-2xl font-bold mb-4">Policies</h2>
//         <p>Check-in: 2:00 PM</p>
//         <p>Check-out: 11:00 AM</p>
//       </div>
//     );
//   };
//  export default Policies;  
// 'use client'
// import React, { useState } from 'react'

// export default function Policies({ policies }) {
//   const [activeTab, setActiveTab] = useState('checkIn')

//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-semibold mb-4">Policies</h2>
//       <div className="bg-white rounded-lg shadow-md">
//         <div className="flex border-b">
//           {Object.keys(policies).map((key) => (
//             <button
//               key={key}
//               className={`px-4 py-2 ${activeTab === key ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
//               onClick={() => setActiveTab(key)}
//             >
//               {policies[key].title}
//             </button>
//           ))}
//         </div>
//         <div className="p-4">
//           {policies[activeTab].content.map((item, index) => (
//             <p key={index} className="mb-2">{item}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import React, { useState } from 'react'

export default function Policies({ policies }) {
  // Ensure activeTab matches a valid key in the policies object
  const [activeTab, setActiveTab] = useState('checkin')

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Policies</h2>
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex border-b">
          {Object.keys(policies).map((key) => (
            <button
              key={key}
              className={`px-4 py-2 ${activeTab === key ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              onClick={() => setActiveTab(key)}
            >
              {policies[key].title}
            </button>
          ))}
        </div>
        <div className="p-4">
          {/* Add conditional check to ensure policies[activeTab] exists */}
          {policies[activeTab] && policies[activeTab].content ? (
            policies[activeTab].content.map((item, index) => (
              <p key={index} className="mb-2">{item}</p>
            ))
          ) : (
            <p>No content available for this policy.</p>
          )}
        </div>
      </div>
    </div>
  )
}
