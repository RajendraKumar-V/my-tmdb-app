import React, { useState, useEffect } from "react";
import MovieList from './MovieList';
import ErrorBoundary from "./ErrorBoundary";
//import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
