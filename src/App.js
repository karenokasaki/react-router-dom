import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import { useState } from "react";
import projects from "./projects.json";

function App() {
  //path => o caminho da url -> SEM A URL BASE
  //element => qual é a pagina que deve ser renderizada nesse PATH.
  //tudo FORA do <routes></routes> vai permanecer sendo renderizado na tela INDEPENDENTE DA MINHA ROTA!!

  const [allProjects, setAllProjects] = useState(projects);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={   <HomePage allProjects={allProjects} />    } />

        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="/projects/:projectID" element={     <ProjectDetailsPage allProjects={allProjects} />     } />

      </Routes>
    </div>
  );
}

export default App;
