import React from 'react'

import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Discover from './pages/Discover';
import SignIn from './pages/SignIn';
import MainLayout from './layouts/MainLayout';
import UserLayout from './layouts/UserLayout';
import SignUp from './pages/SignUp';
import Destinations from './pages/Destinations';
import AboutUs from './pages/AboutUs';
import TripPlans from './pages/TripPlans';
import WorkWithUs from './pages/WorkWithUs';
import UserDashboard from './pages/UserDashboard';
import TourDescription from './pages/TourDescription';
import LocationPage from './pages/LocationPage';
import UserTours from './pages/UserTours';
import Maps from './pages/Maps';

// import Home from './pages/home';

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path='/' element={<Discover />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/destinations/locations/:id' element={<LocationPage />} />
            <Route path='/trip-plans' element={<TripPlans />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/tours/:id' element={<TourDescription />} />
          </Route>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route element={<UserLayout />} >
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/user/tours' element={<UserTours />} />
            {/* <Route path='/destinations' element={<Destinations />} />
            <Route path='/trip-plans' element={<TripPlans />} />
            <Route path='/about-us' element={<AboutUs />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App