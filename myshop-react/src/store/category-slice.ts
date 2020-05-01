import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";
import { categoryService, ICategory } from "../services/category-service";

interface ICategoryState {
  categories: ICategory[];
}

const initialState: ICategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategoriesSuccess: (state, { payload }: PayloadAction<ICategory[]>) => {
      state.categories = payload;
    },
  },
});

export default categorySlice.reducer;

export const { fetchCategoriesSuccess } = categorySlice.actions;

export const fetchCategoriesAsync = (): AppThunk => async (dispatch) => {
  const { data } = await categoryService.getCategories();
  dispatch(fetchCategoriesSuccess(data))
};

export const selectCategories = (state: RootState) => state.category.categories;
