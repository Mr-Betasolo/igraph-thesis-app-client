import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import PrivateWrapper from "./pages/PrivateRoute/PrivateWrapper";
import DashBoard from "./pages/PrivateRoute/DashBoard/DashBoard";
import Main from "./pages/PrivateRoute/Main/Main";
import AddStudent from "./pages/PrivateRoute/AddStudent/AddStudent";
import AddSubject from "./pages/PrivateRoute/AddSubject/AddSubject";
import SingleSubject from "./pages/PrivateRoute/SingleSubject/SingleSubject";
import StudentGraph from "./pages/PrivateRoute/StudentGraph/StudentGraph";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route element={<PrivateWrapper />}>
          <Route path="dashboard" element={<DashBoard />}>
            <Route path="subjects" element={<Main />} />
            <Route path="addSubject" element={<AddSubject />} />
            <Route path="addStudent" element={<AddStudent />} />
            <Route path="subjects/:subjectId" element={<SingleSubject />} />
            <Route
              path="subjects/:subjectId/:studentId"
              element={<StudentGraph />}
            />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
