import HomePage from "./pages/HomePage";
import NotFound from "./pages/notFound";
import MainLayout from "./layouts/MainLayout";
import CaseStudyPage from "./pages/CaseStudies";
import ShopifyStorePage from "./pages/ShopifyStorePage";
import LandingPageDesign from "./pages/LandingPageDesign";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
function App() {

   const router = createBrowserRouter(
     createRoutesFromElements(
       <Route path="/" element={<MainLayout />}>
         <Route path="/" element={<HomePage />} />
         <Route path="*" element={<NotFound />} />
         <Route
           path="boco-shopify-store-build"
           element={<ShopifyStorePage />}
         />
         <Route
           path="custom-shopify-landing-page"
           element={<LandingPageDesign />}
         />
         <Route path="case-studies" element={<CaseStudyPage />} />
       </Route>
     )
   );

   return <RouterProvider router={router} />;
}

export default App
