import { Route, Routes } from "react-router-dom"
import { Index } from "../pages/Index"

export const HomeRoute = () => {
    return(
        <Routes>
            <Route 
            path="/"
              element={<Index />}>
            </Route>
        </Routes>
    )
}