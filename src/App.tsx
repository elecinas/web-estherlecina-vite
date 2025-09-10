// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, AboutPage, BlogPage, ContactPage, GalleryDesignUxUiPage, GalleryDevelopmentPage, GalleryGraphicDesignPage, GalleryIllustrationPage, GalleryOthersPage, GalleryPage, NotFoundPage404 } from './pages';
import Header from './components/Header'
import './App.css'
import GalleryItemPage from './pages/GalleryItemPage';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/languageContext';

function App() {

  return (
    <>
    <LanguageProvider>
      <Router>
        <Header  />
        {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        <ScrollToTop />
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
          <Route path="/404" element={<NotFoundPage404 />}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </Router>
    </LanguageProvider>
    </>
  )
}

export default App
