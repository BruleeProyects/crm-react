import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <h1 className="text-6xl font-bold">CMR - React</h1>

            <Outlet/> //Se usa para inyectar los children de main.jsx
        </div>
    )
}

export default Layout