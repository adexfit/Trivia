import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./components/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </Provider>
);
