import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ContactPage } from "./ContactPage";
import { AboutUsPage } from "./AboutUsPage";
import { NotFound } from "./NotFound";
import { BooksPage } from "./BooksPage";
import { CreateBook } from "./CreateBook";
import { BookList } from "./BookList";
import { BookDetailView } from "./bookDetailView";
import { ProductDetailPage } from "./ProductDetailPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/books" element={<BooksPage />}>
        <Route path="booklist" element={<BookList />} />

        <Route path="createbook" element={<CreateBook />}>
          <Route path="link1" element={<>link 1 page</>} />
          <Route path="link2" element={<>link 2 page</>} />
        </Route>
      </Route>

      {/* <Route path="/bookdetail/0" element={<>book 1</>} />
      <Route path="/bookdetail/1" element={<>book 2</>} />
      <Route path="/bookdetail/2" element={<>book 3</>} />
      <Route path="/bookdetail/3" element={<>book 4</>} /> */}

      <Route path="/bookdetail/:index" element={<BookDetailView />} />
      <Route path="/productDetail/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};
