import { useState } from "react";
import { SidebarIcon } from "./icons/sideBar";

export function Sidebar() {
    const [sidebar, setSidebar] = useState(true);

    if (sidebar) {
        return <div className=" w-96 h-screen bg-red-100">
            <div className="cursor-pointer hover:bg-slate-400 pt-1" onClick={() => { setSidebar(!sidebar) }}>
                <SidebarIcon />
            </div>
        </div>
    }
    else {
        return <div className=" w-10 h-screen bg-red-100">
            <div className="cursor-pointer  hover:bg-slate-400 p-1" onClick={() => { setSidebar(!sidebar) }}>
                <SidebarIcon />
            </div>
        </div>
    }

}
