import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, BlogPage, ContactPage, GalleryDesignUxUiPage, GalleryDevelopmentPage, GalleryGraphicDesignPage, GalleryIllustrationPage, GalleryOthersPage, GalleryPage } from './pages';
import Header from './components/Header'
import CardGallery from './components/CardGallery'
import './App.css'
import GalleryItemPage from './pages/GalleryItemPage';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/portfolio" element={<GalleryPage />}></Route>
          <Route path="/illustration" element={<GalleryIllustrationPage />}></Route>
          <Route path="/graphic-design" element={<GalleryGraphicDesignPage />}></Route>
          <Route path="/ux-ui-design" element={<GalleryDesignUxUiPage />}></Route>
          <Route path="/development" element={<GalleryDevelopmentPage />}></Route>
          <Route path="/others" element={<GalleryOthersPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path='/portfolio/:name' element={<GalleryItemPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
