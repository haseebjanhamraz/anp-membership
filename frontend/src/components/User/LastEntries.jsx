import React from "react";

const LastEntries = () => {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Top students:
      </h2>
      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        <li>
          <span className="font-semibold text-gray-900 dark:text-white">
            Bonnie Green
          </span>{" "}
          with{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            70
          </span>{" "}
          points
        </li>
        <li>
          <span className="font-semibold text-gray-900 dark:text-white">
            Jese Leos
          </span>{" "}
          with{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            63
          </span>{" "}
          points
        </li>
        <li>
          <span className="font-semibold text-gray-900 dark:text-white">
            Leslie Livingston
          </span>{" "}
          with{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            57
          </span>{" "}
          points
        </li>
      </ol>
    </>
  );
};

export default LastEntries;
