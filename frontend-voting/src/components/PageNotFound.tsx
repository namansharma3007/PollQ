import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center text-white overflow-hidden">
     <img className="z-0 absolute inset-0 object-cover w-full h-full opacity-10" 
        src="https://images.unsplash.com/photo-1686593686409-43456910d65c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cnBsZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="" />
   
    <div className="z-10 flex flex-col items-center space-y-6">
      <img 
      src={`../../public/notfound.svg`} 
      alt="Page Not Found" 
      className="w-10/12 md:w-2/3 lg:w-1/2 mb-4"
    />
      <Link
        to="/"
        className=""
      >
      <button className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 text-base" >
            Back to Home
          </button>
      </Link>
    </div>
   
  </div>
  )
}

export default PageNotFound
