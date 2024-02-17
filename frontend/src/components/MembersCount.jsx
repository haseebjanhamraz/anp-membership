// import React from "react";

// const MembersCount = ({ totalCount }) => {
//   return <div className="mb-4">Total Members: {totalCount}</div>;
// };

// export default MembersCount;

import { CheckIcon } from "@heroicons/react/20/solid";

export default function MembersCount({ totalCount, districts }) {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="flex space-x-3 -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-red-500 py-3 text-center ring-1 ring-inset shadow-lg ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-white">
                  Total Registered
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {totalCount}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white">
                    Member(s)
                  </span>
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-blue-300 py-3 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-white">
                  Total Districts
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {districts.length}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
