import { configureStore } from '@reduxjs/toolkit';
// import rocketsSlice from './rockets/rocketsSlice';
// import missionReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    //     rocket: rocketsSlice,
    //     missions: missionReducer,
  },
});

export default store;
