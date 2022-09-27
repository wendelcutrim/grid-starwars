import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NotFoundPage from "./pages/NotFoundPage";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router