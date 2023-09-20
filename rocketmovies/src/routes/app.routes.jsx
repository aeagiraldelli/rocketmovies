import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { NewMovie } from '../pages/NewMovie';
import { MovieDetails } from '../pages/MovieDetails';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newmovie" element={<NewMovie />} />
      <Route path="/details/:id" element={<MovieDetails />} />
    </Routes>
  );
}
