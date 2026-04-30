import React from "react";

import { Route, Routes} from 'react-router-dom'
import Rendering from "./Rednering"
import FormHandling from "./FormHandling"



const   AppRoute = () =>{
    return (
        <Routes>
        <Route path="/"    element={<Rendering/>}   />
        <Route path="/FormHandling" element={ <FormHandling/>}/>
      
        </Routes>
    )
}

export default AppRoute;