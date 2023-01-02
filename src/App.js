import "./App.css";
import Hedd from "./components/common/heading/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Deposito from "./components/tabungan/Deposito";
import Sergur from "./components/tabungan/Sergur";
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
import Aset from "./components/tabungan/Aset";
import Syariah from "./components/tabungan/Syariah";
import Haji from "./components/tabungan/Haji";
import Umroh from "./components/tabungan/Umroh";
import Emas from "./components/tabungan/Emas";
import Develop from "./components/tabungan/Develop";
import Jasa from "./components/tabungan/Jasa";

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
          <Route exact path="/jasa" element={<Jasa />} />
          <Route exact path="/deposito" element={<Deposito />} />
          <Route exact path="/sergur" element={<Sergur />} />
          <Route exact path="/develop" element={<Develop />} />
          <Route exact path="/aset" element={<Aset />} />
          <Route exact path="/syariah" element={<Syariah />} />
          <Route exact path="/haji" element={<Haji />} />
          <Route exact path="/umroh" element={<Umroh />} />
          <Route exact path="/emas" element={<Emas />} />
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
