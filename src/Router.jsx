import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Dashboard from './Pages/Dashboard/Dashboard'

export default function Router() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
      </Routes> 
    </BrowserRouter>
  );
}
