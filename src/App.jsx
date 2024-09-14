import { useEffect, useState } from "react";
import { ModalProvider } from "./context/ModalContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import Modal from "./components/Modal";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import ContactsFooter from "./components/ContactsFooter";
import ServicesPage from "./pages/ServicesPage";
import LocationPage from "./pages/LocationPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactsPage from "./pages/ContactsPage";
import PricesPage from "./pages/PricesPage";
import ReservePage from "./pages/ReservePage";
import NewsPage from "./pages/NewsPage";

export default function App() {
  const [pageLoading, setPageLoading] = useState(true);

  window.addEventListener("load", function () {
    setPageLoading(false);
  });

  useEffect(() => {
    if (document.readyState === "complete") setPageLoading(false);
  }, []);

  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className={pageLoading ? "" : "hidden"}>
          <div className="z-50 w-full h-full fixed bg-white"></div>
          <LoadingSpinner extraStyles="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 border-lBlue" />
        </div>
        <NavBar />
        <Modal />
        <Routes>
          <Route
            index
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <Homepage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <Homepage />
              </div>
            }
          />
          <Route
            path="paslaugos"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <ServicesPage />
              </div>
            }
          />
          <Route
            path="vieta"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <LocationPage />
              </div>
            }
          />
          <Route
            path="atsiliepimai"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <ReviewsPage />
              </div>
            }
          />
          <Route
            path="kontaktai"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <ContactsPage />
              </div>
            }
          />
          <Route
            path="kainos"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <PricesPage />
              </div>
            }
          />
          <Route
            path="rezervuoti"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <ReservePage />
              </div>
            }
          />
          <Route
            path="naujienos"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <NewsPage />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div
                className="opacity-0 -translate-y-16 animate-pageLoadIn"
                key={Math.random()}
              >
                <NavigateToHomepage />
              </div>
            }
          />
        </Routes>
        <ContactsFooter />
      </BrowserRouter>
    </ModalProvider>
  );
}

function NavigateToHomepage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
}
