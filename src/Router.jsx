import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Dashboard from './Pages/Dashboard/Dashboard'

import MainStep from "./Component/Steper/MainStep";

export default function Router() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/" element={<MainStep />} />
         
      </Routes> 
    </BrowserRouter>
  );
}
