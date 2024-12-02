import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import { Navigations } from "./navigations";
const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/SevicePage"));
const StudyDestination =  lazy(() => import("./pages/StudyDestination"));
const UpcomingEvents = lazy(() => import("./pages/UpcomingEvents"));
const CourseFinder = lazy(() => import("./pages/CourseFinder"));

function App() {
    return (
        <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path={Navigations.home} element={<Suspense fallback={<Spinner/>}><About/></Suspense>}/>
              <Route path={Navigations.services} element={<Suspense fallback={<Spinner/>}><ServicesPage/></Suspense>}/>
              <Route path={Navigations.studies} element={<Suspense fallback={<Spinner/>}><StudyDestination/></Suspense>}/>
              <Route path={Navigations.upcoming_events} element={<Suspense fallback={<Spinner/>}><UpcomingEvents/></Suspense>}/>
              <Route path={Navigations.course_finder} element={<Suspense fallback={<Spinner/>}><CourseFinder/></Suspense>}/>
            </Routes>
        </Router>
    );
}

export default App;
