
import "./App.css";

import AppRouter from "./components/AppRouter";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the localization setup
import Navbar from "./components/Shared/Navbar";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppRouter>
        <Navbar />
      </AppRouter>
    </I18nextProvider>
  );
}

export default App;
