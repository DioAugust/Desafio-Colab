import React from 'react';
import Home from './views/home/Home';
import ListUsers from './views/listUsers/ListUsers';
import DetailsUsers from './views/detailsUsers/DetailsUsers';
import { User } from './model/types/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoute = () => {
  let user: User = {
    gender: "",
    name: {
      title: "",
      first: "",
      last: ""
    },
    location: {
      street: {
        number: 0,
        name: ""
      },
      city: "",
      state: "",
      country: "",
      postcode: 0,
      coordinates: {
        latitude: "",
        longitude: ""
      },
      timezone: {
        offset: "",
        description: ""
      }
    },
    email: "",
    login: {
      uuid: "",
      username: "",
      password: "",
      salt: "",
      md5: "",
      sha1: "",
      sha256: ""
    },
    dob: {
      date: "",
      age: 0
    },
    registered: {
      date: "",
      age: 0
    },
    phone: "",
    cell: "",
    id: {
      name: "",
      value: ""
    },
    picture: {
      large: "",
      medium: "",
      thumbnail: ""
    },
    nat: ""
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lists' element={<ListUsers />} />
        <Route path='/details/:userId' element={<DetailsUsers user={user} />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
