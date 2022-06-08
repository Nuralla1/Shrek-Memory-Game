import React, { useState, useEffect, useMemo } from "react";
import { Game } from "./components/Game/Game";
import { GameOver } from "./components/GameOver/GameOver";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/gameOver" element={<GameOver />} />
      </Routes>
    </>
  );
};

export default App;
