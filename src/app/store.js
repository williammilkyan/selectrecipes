
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import searchTermReducer from '../features/searchTerm/newSearchTermSlice.js';
import allRecipesReducer from '../features/allRecipes/AllRecipesSlice.js';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
  }
});