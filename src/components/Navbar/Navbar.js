import React, { useState, useContext} from 'react'
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
        <nav class="navbar navbar-light bg-warning">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">Movies Task</Link>

                <Routes>
                    <Route path='/' element={
                        <div className="d-flex justify-content-end">
                            <div class="dropdown">
                                <button type="button" class="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Release Year: {appContext.selectedYr} <span class="caret"></span></button>
                                <ul class="dropdown-menu dropdown-menu-end scrollable-menu" aria-labelledby="dropdownMenuButton1">
                                    {yrs.map(yr => <li key={yr} class="dropdown-item" onClick={() => appContext.setSelectedYr(yr)}>{yr}</li>)}
                                </ul>
                            </div>
                            {isFilterSet() && <button type="button" class="btn" onClick={clearFilters}>Clear filters <i class="fa-solid fa-xmark"></i></button>}
                        </div>
                    } />
                </Routes>
            </div>
        </nav>
    )
}

export default Navbar