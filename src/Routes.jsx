import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Products from "./Page/Products/Products";
import Favoritos from "./Page/Favoritos/Favoritos";
import Error from "./Componets/Error/Error";
import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";

export const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" elements={<Home />} />
                <Route path="/Product/:id" elements={<Products />} />
                <Route path="Favoritos" elements={<Favoritos />} />
                <Route path="*" elements={<Error />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}