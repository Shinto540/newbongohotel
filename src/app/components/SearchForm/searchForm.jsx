import { useState } from 'react';

const Filters = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform filter action here (e.g., sending data to API or updating the state)
    console.log({
      location,
      checkInDate,
      checkOutDate,
      people,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 items-center">
      {/* Location Filter */}
      <div className="flex flex-col">
        <label htmlFor="location" className="text-sm font-medium mb-1">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="p-2 border rounded-md w-full"
        />
      </div>

      {/* Date Filter */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="text-sm font-medium mb-1">Check-In</label>
          <input
            id="checkInDate"
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="text-sm font-medium mb-1">Check-Out</label>
          <input
            id="checkOutDate"
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
      </div>

      {/* Number of People Filter */}
      <div className="flex flex-col">
        <label htmlFor="people" className="text-sm font-medium mb-1">Number of People</label>
        <input
          id="people"
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
          className="p-2 border rounded-md w-full"
        />
      </div>

      {/* Submit Button */}
      <div className="flex mt-4 lg:mt-0">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Search
        </button>
      </div>
    </form>
  );
};

export default Filters;


// 'use client'
// import { useRouter } from 'next/router';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as z from "zod"
// import {zodResolver} from "@hookform/resolvers/zod";

// export const formSchema = z.object({
//     location: z.string().min(2).max(50),
//     dates: z.object({
//       from: z.date(),
//       to: z.date(),
//     }),
//     adults: z
//       .string()
//       .min(1, {
//         message: "Please select at least 1 adult",
//       })
//       .max(12, { message: "Max 12 adults occupancy" }),
//     children: z
//       .string()
//       .min(0)
//       .max(12, {
//         message: "Max 12 children occupancy",
//       }),
//     rooms: z.string().min(1, {
//       message: "Select at least 1 room",
//     }),
//   });
  
// function shadForm(){
//     const router = useRouter();
//     const form = useForm<z.infer<formSchema>>({
//         resolver: zodResolver(formSchema), 
//         defaultValues: {
//             location: ""
//     dates: {
//       from: undefined,
//       to: undefined,
//     },
//     adults: "1",
//     children: "1",
//     rooms: "1",
//         },
//     });
    
// function onSubmit(values: z.infer<formSchema>){
    
// }



//   return 
//     <div>
//       SearchForm
//     </div>
  
// }

// export default shadform;
