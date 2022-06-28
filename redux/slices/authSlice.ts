// import { createSlice } from '@reduxjs/toolkit';
// import AuthServices from '../../../services/auth-services';
// import authService from '../../../services/auth-services';

// type User = {
//   name?: string;
//   email?: string;
// };

// type StateProps = {
//   userDetails: User;
// };

// const initialState: StateProps = {
//   userDetails: {},
// };

// export const logout = async () => {
//   await AuthServices.handleLogout()
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUserDetails(state, action) {
//       state.userDetails = action.payload;
//     },
//     signOut(state) {
//       authService.handleLogout().then(() => {
//         return state.userDetails = {};
//       })
//     }
//   },
// });

// export const { setUserDetails, signOut } = authSlice.actions;
// export default authSlice.reducer;