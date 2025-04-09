import { useState } from "react"
import { SidebarIcon } from "./Components/icons/sideBar"
import { useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  console.error(isDesktop)

  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop])

  return <div className="flex">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <MainContent sidebarOpen={sidebarOpen} />
  </div>
}


function MainContent() {
  return <div className="w-full ">
    <div className="md:block hidden h-48 bg-black"></div>
    <div className=" grid grid-cols-10 gap-3 hidden:mt-0 ml-2  mt-3 mr-1">
      <div className="h-90  rounded-2xl  bg-red-300 md:col-span-2 -translate-y-6  shadow-lg col-span-10  hidden md:block">

      </div>
      <div className="md:h-90 h-50  rounded-2xl  bg-green-300  md:col-span-5 shadow-lg col-span-10 ">

      </div>
      <div className="md:h-90 h-50 rounded-2xl  bg-yellow-300 md:col-span-3 shadow-lg col-span-10">

      </div>

    </div>
  </div>
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return <div className='fixed top-0 left-0'>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarIcon />
      </div>
    </div>
  }
  return <div className='w-96 h-screen bg-red-200 fixed top-0 left-0 md:relative'>
    <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarIcon />
      </div>
    </div>
  </div>
}

export default App
