import { FaSearch, FaPoll, FaClipboardList, FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-white p-4 w-full">
      <h1 className="text-3xl my-4 font-bold">Home</h1>
      <div className="mb-4">
        <div className="flex items-center bg-gray-700 p-2 rounded-lg shadow-md w-full">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search polls..."
            className="bg-gray-700 text-white outline-none w-full placeholder-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <h2 className="text-xl mb-4 flex items-center font-semibold">
            <FaPoll className="mr-2" />
            Current Active Polls 🗳️
          </h2>
          {/* List of active polls */}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <h2 className="text-xl mb-4 flex items-center font-semibold">
            <FaClipboardList className="mr-2" />
            Polls You Participated In or Created 📋
          </h2>
          {/* List of polls user participated in or created */}
        </div>
      </div>
      <div className="mt-6 w-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center w-full justify-center">
          <FaPlus className="mr-2" />
          Create Poll ✍️
        </button>
      </div>
    </div>
  );
}
