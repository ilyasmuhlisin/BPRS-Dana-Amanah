import "./App.css";
import Hedd from "./components/common/heading/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Deposito from "./components/produk/simpanan/Deposito";
import Jasa from "./components/produk/jasa/Jasa";
import Visi from "./components/visi/Visi";
import Organisasi from "./components/organisasi/Organisasi";
import Pengurus from "./components/pengurus/Pengurus";
import Wadiah from "./components/tabungan/Wadiah";
import Mudharabah from "./components/tabungan/Mudharabah";
import Berhadiah from "./components/tabungan/Berhadiah";
import Simple from "./components/tabungan/Simple";
import Asuh from "./components/tabungan/Asuh";
import Multi from "./components/tabungan/Multi";
import Ibadah from "./components/tabungan/Ibadah";
import Pendidikan from "./components/tabungan/Pendidikan";
import Pensiun from "./components/tabungan/Pensiun";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Hea /> */}
        {/* <Header /> */}
        <Hedd />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sejarah" element={<About />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/deposito" element={<Deposito />} />
          <Route exact path="/jasa" element={<Jasa />} />
          <Route exact path="/visi" element={<Visi />} />
          <Route exact path="/organisasi" element={<Organisasi />} />
          <Route exact path="/pengurus" element={<Pengurus />} />
          <Route exact path="/wadiah" element={<Wadiah />} />
          <Route exact path="/mudharabah" element={<Mudharabah />} />
          <Route exact path="/berhadiah" element={<Berhadiah />} />
          <Route exact path="/simple" element={<Simple />} />
          <Route exact path="/asuh" element={<Asuh />} />
          <Route exact path="/multi" element={<Multi />} />
          <Route exact path="/ibadah" element={<Ibadah />} />
          <Route exact path="/pendidikan" element={<Pendidikan />} />
          <Route exact path="/pensiun" element={<Pensiun />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
