
import { Route, Routes } from 'react-router-dom';
import { Suspense,lazy} from 'react';

const Casts = lazy(() => import("./casts/Casts"));
const Review = lazy(() => import("./Rewievs/Reviews"));
const FilmSearch = lazy(() => import("../pages/moviesSearchPage/MoviesSearchPage"));
const HeaderMenu = lazy(() => import("../pages/headerPage/HeaderPage"));
const SingleFilmPage = lazy(() => import("../pages/singleFilmPage/SingleFilmPage"));
const MainPage = lazy(() => import("../pages/mainPage/mainPage"));

export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path='/' element={<HeaderMenu/>}>
        <Route index element={<MainPage />}/>
        <Route path="movies" element={<FilmSearch/>}/>
        <Route path="movies/:id/" element={<SingleFilmPage />}>
          <Route path="cast" element={<Casts/>} />
          <Route path="reviews" element={<Review/>} />
        </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
