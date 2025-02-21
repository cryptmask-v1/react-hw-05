import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";

const App = lazy(() => import("./App.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const MovieDetails = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetails.jsx")
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/cast" element={<MovieDetails />} />
          <Route path="/movies/:id/reviews" element={<MovieDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
