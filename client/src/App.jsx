import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./root/Root";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/Page7";

import BlogHome from "./pages/BlogHome";
import ScrollTop from "./hook/scrollTop";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import StorageService from "./pages/StorageService";
import Login from "./components/Admin/pages/Auth/Login";
import AdminDashboard from "./components/Admin/Dashboard/Dashboard";
import SectionHelper from "./components/Admin/Dashboard/SectionHelper";
import FeaturedBlog from "./components/BlogPage/FeaturedBlog";
import ParticularBlogPage from "./components/BlogPage/ParticularBlogPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="b2c-fulfillment" element={<Page2 />} />
        <Route path="logistics" element={<Page3 />} />
        <Route path="fba-fulfillment" element={<Page4 />} />
        <Route path="multi-channel-ecommerce" element={<Page5 />} />
        <Route path="page6" element={<Page6 />} />
        {/* <Route path="page7" element={<Page7 />} /> */}
        <Route path="/blogs/home" element={<BlogHome />} />
        <Route path="/page9" element={<Page8 />} />
        <Route path="fbn-fulfillment" element={<Page9 />} />
        <Route path="/blog/:id" element={<ParticularBlogPage />} />
        <Route path="page7" element={<StorageService />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<SectionHelper />} />
      <Route path="/" element={<FeaturedBlog />} />
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}>
      <ScrollTop />
    </RouterProvider>
  );
};

export default App;
