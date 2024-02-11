import React from 'react'
import Home from './views/home/Home'
import ListUsers from './views/listUsers/ListUsers'
import DetailsUsers from './views/detailsUsers/DetailsUsers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/lists' element={<ListUsers />} />
                <Route path='/details' element={<DetailsUsers />} />
            </Routes>
        </Router>
    )
}

export default AppRoute