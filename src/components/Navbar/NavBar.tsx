


export const NavBar = () => {
  return (
    <header className="h-16 ">
      <div className=" flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <div className=" whitespace-nowrap text-2xl font-black">
         
          <span className="text-black ml-10  font-serif">Smart up</span>
        </div>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className=" md:mr-12 hover:text-blue-600 cursor-pointer">
                 Home
            </li>
            <li className=" md:mr-12 hover:text-blue-600 cursor-pointer">
               Course
            </li>
            
            <li className=" md:mr-12 hover:text-blue-600">
              <button className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
