import styles from "./App.module.css";
import { Navbar } from "/src/components/Navbar.jsx";
import { Header } from "/src/components/Header.jsx";
import { Hero } from "/src/components/Hero.jsx";
import { Services } from "/src/components/Services.jsx";
import { Result } from "./components/Result";
import { Search } from "./components/Search";
import { Affiliations } from "./components/Affiliations";
import { PhotoGallery } from "./components/PhotoGallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <Hero />
      <Services />
      <Result />
      <Search />
      <Affiliations />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
