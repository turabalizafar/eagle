import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import CategoryGallery from "./components/CategoryGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import WhatsappButton from './components/WhatsappButton';
import CategoryPage from './components/CategoryPage';

const App = () => {
  // IMAGE ARRAYS – just drop your filenames here
  const kitchen = [
    '/assets/kitchen preview.jpg'
  ];
  const media_wall = [
   '/assets/media wall preview.jpg'
  ];
  const wardrobe = [
   '/assets/wardrobe preview.jpg'
  ];
  const study_table = [
   '/assets/study table preview.jpg'
  ];
  const decoration = [
    '/assets/decoration preview.jpg'
  ];

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <div className="gallery-container">
                <div><CategoryGallery title="Kitchens" images={kitchen} route="/category/kitchen" /></div>
                <div><CategoryGallery title="Wardrobes" images={wardrobe} route="/category/wardrobe" /></div>
                <div><CategoryGallery title="Media Wall" images={media_wall} route="/category/media-wall" /></div>
                <div><CategoryGallery title="Study Table" images={study_table} route="/category/study-table" /></div>
                <div><CategoryGallery title="Decoration" images={decoration} route="/category/Decoration" /></div>
              </div>
              <Contact />
              <Footer />
              <WhatsappButton />
            </>
          }
        />
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>
     
    </div>
  );
};

export default App;
