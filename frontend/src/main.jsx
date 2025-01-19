import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// import { persistor } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store } from "./store/store.js";
// import ThemeProvider from "./components/ThemeProvider.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<HomePage />} />
//       <Route path="/signin" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/settings" element={<SettingsPage />} />
//       <Route path="/profile" element={<ProfilePage />} />
//       <Route path="*" element={<CustomNotFound />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider> */}
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ThemeProvider>
      </Provider>
    </PersistGate> */}
  </StrictMode>
);
