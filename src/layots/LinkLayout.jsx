import { Link, Outlet } from "react-router-dom"

const LinkLayout = () => {
    return (
        <div>
            <Link to={'/main'}>Main</Link>        
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Home</Link>

            <Outlet/>
        </div>
    ) 
}

export default LinkLayout   