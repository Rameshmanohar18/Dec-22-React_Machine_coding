import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-black text-white flex justify-between items-center p-3">
        <div className="mx-10">
      <img src="./favicon.svg" alt="" />
        </div>
        <div className="flex gap-15">
         <NavLink to={"/"} className={({isActive})=>isActive?"bg-blue-500 p-2 rounded w-40":"p-2 rounded w-40"}>Rendiring Methods</NavLink>
         <NavLink to={"/FormHandling"} className={({isActive})=>isActive?"bg-blue-500 p-2 rounded w-40":"p-2 rounded w-40"}>Form Handling</NavLink>
        </div>
    </div>
    </>
  )
}

export default NavBar