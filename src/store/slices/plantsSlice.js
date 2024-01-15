import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../api/plants';

export const fetchPlants = createAsyncThunk(
  'plants/fetchPlants',
  async ({ startIndex, batchSize, signal }) => {
    try {
      const dataChunk = await fetchData(startIndex, batchSize, signal);
      return dataChunk;
    } catch (error) {
      console.error('Помилка обробки даних:', error);

      throw error;
    }
  }
);

export const plantsSlice = createSlice({
  name: 'plants',
  initialState: {
    plants: [],
    loading: false,
  },
  reducers: {
    setIsLoading: (state, action) => (state.loading = action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlants.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPlants.fulfilled, (state, action) => {
      state.loading = false;
      state.plants.push(...action.payload);
      console.log('Отримані дані:', state.plants);
    });
    builder.addCase(fetchPlants.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setIsLoading } = plantsSlice.actions;

export default plantsSlice.reducer;
