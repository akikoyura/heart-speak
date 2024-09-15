import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Disagree from "./components/Disagree.tsx";
import Agree from "./components/Agree.tsx";

function App() {
    return (
        <Routes>
            <Route path={ "/" } index={ true } element={ <Home/> }/>
            <Route path={ "/disagree" } element={ <Disagree/> }/>
            <Route path={ "/agree" } element={ <Agree/> }/>
        </Routes>
    )
}

export default App
