import { useContext} from 'react'
import { Link, Route, Routes } from 'react-router-dom'

// Context
import AppContext from "../../context/AppContext";

const Navbar = () => {
    const currentYr = new Date().getFullYear();
    const startYr = 1900
    const yrs = Array(currentYr - startYr + 1).fill().map((_, i) => currentYr - i)

    const appContext = useContext(AppContext);

    function clearFilters() {
        appContext.setSelectedYr(null)
    }

    function isFilterSet() {
        return !!appContext.selectedYr
    }

    return (
        <nav className="navbar navbar-light bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movies Task</Link>

                <Routes>
                    <Route path='/' element={
                        <div className="d-flex justify-content-end">
                            <div className="dropdown">
                                <button type="button" className="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Release Year: {appContext.selectedYr} <span className="caret"></span></button>
                                <ul className="dropdown-menu dropdown-menu-end scrollable-menu" aria-labelledby="dropdownMenuButton1">
                                    {yrs.map(yr => <li key={yr} className="dropdown-item" onClick={() => appContext.setSelectedYr(yr)}>{yr}</li>)}
                                </ul>
                            </div>
                            {isFilterSet() && <button type="button" className="btn" onClick={clearFilters}>Clear filters <i className="fa-solid fa-xmark"></i></button>}
                        </div>
                    } />
                </Routes>
            </div>
        </nav>
    )
}

export default Navbar