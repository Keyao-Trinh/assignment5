import { Route, Routes } from "react-router-dom";
import {
  AiringView,
  CareerView,
  CartView,
  CreditsView,
  EpisodeView,
  ErrorView,
  FavouriteView,
  GenreView,
  HomeView,
  ImagesView,
  MovieView,
  NowPlayingView,
  OnAirView,
  PersonView,
  PopularTvView,
  PopularView,
  ReviewsView,
  SearchView,
  SeasonsView,
  SettingsView,
  TelevisionView,
  TopRatedView,
  TopTvView,
  TrailerView,
  TrendingTvView,
  TrendingView,
  TvCreditsView,
  TvGenreView,
  TvReviewsView,
  UpcomingView,
} from "@/views";
import { MainLayout } from "./layouts";

// import axios from "axios";

export const App = () => {
  return (
    <Routes>
      <Route element={<HomeView />} path="/" />
      <Route element={<MainLayout />} path="/movies/catagory">
        <Route element={<NowPlayingView />} path="now_playing" />
        <Route element={<PopularView />} path="popular" />
        <Route element={<TopRatedView />} path="top_rated" />
        <Route element={<UpcomingView />} path="upcoming" />
      </Route>
      <Route element={<MovieView />} path="/movie/:id">
        <Route element={<CreditsView />} path="credits" />
        <Route element={<TrailerView />} path="trailers" />
        <Route element={<ReviewsView />} path="reviews" />
      </Route>
      <Route element={<MainLayout />} path="/">
        <Route element={<FavouriteView />} path="favourites" />
        <Route element={<SettingsView />} path="settings" />
        <Route element={<SearchView />} path="search" />
        <Route element={<CartView />} path="cart" />
      </Route>

      <Route element={<MainLayout />} path="/person">
        <Route element={<PersonView />} path=":id">
          <Route element={<ImagesView />} path="images" />
          <Route element={<CareerView />} path="career" />
        </Route>
      </Route>

      <Route element={<MainLayout />} path="/tv/catagory">
        <Route element={<AiringView />} path="airing_today" />
        <Route element={<OnAirView />} path="on_the_air" />
        <Route element={<PopularTvView />} path="popular" />
        <Route element={<TopTvView />} path="top_rated" />
      </Route>

      <Route element={<TelevisionView />} path="/tv/:id">
        <Route element={<SeasonsView />} path="seasons">
          <Route element={<EpisodeView />} path=":number" />
        </Route>
        <Route element={<TvCreditsView />} path="credits" />
        <Route element={<TvReviewsView />} path="reviews" />
      </Route>

      <Route element={<MainLayout />} path="/genre">
        <Route element={<GenreView />} path="movies/" />
        <Route element={<TvGenreView />} path="tv" />
      </Route>

      <Route element={<MainLayout />} path="/trending">
        <Route element={<TrendingView />} path="movies" />
        <Route element={<TrendingTvView />} path="tv" />
      </Route>
      <Route element={<ErrorView />} path="*" />
    </Routes>
  );
};
