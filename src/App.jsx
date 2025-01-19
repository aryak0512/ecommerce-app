import Login from "./Login";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Dashboard from "./Dashboard";
import Register from "./Register";


function App(){

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;