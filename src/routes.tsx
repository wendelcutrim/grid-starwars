import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Person from './pages/Person';
import NotFoundPage from "./pages/NotFoundPage";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/:id" element={<Person />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router