import React from "react";

function EventEnquiry() {
  return (
    <div className="rounded-xl border overflow-hidden  h-screen ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-zinc-800">
      <div className="h-screen ">
        <div className="flex p-20 text-white text-3xl font-sans">
          <h1>EVENT ENQUIRY</h1>
          <div className="w-full flex-1 mt-8">
            <div className=" max-w-xs">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="name"
                placeholder="Company"
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="name"
                placeholder="First Name"
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="name"
                placeholder="Last Name"
              />
              <input
                type="date"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                placeholder="Select a date"
              />
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventEnquiry;
