import React from "react";
import { Route, Routes } from "react-router";
import WorkoutDetails from "./Components/WorkoutsDetails/WorkoutDetails";
import AddWorkout from "./Components/AddWorkouts/AddWorkouts";
import UpdateWorkout from "./Components/UpdateWorkouts/UpdateWorkouts";
import Nav from './Components/Nav/Nav'
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Nav/>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<WorkoutDetails />} />
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/updateworkout/:id" element={<UpdateWorkout />} />
        </Routes>
      </React.Fragment>
      <Footer/>
    </div>
  );
}

export default App;
