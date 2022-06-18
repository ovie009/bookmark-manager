import '../CSS/App.css';
import MainSection from './MainSection';
import Features from './Features';
import Download from './Download';
import Faq from './Faq';
import Footer from './Footer';

function App() {
  return (
    <main className="App">
      <MainSection></MainSection>
      <Features></Features>
      <Download></Download>
      <Faq></Faq>
      <Footer></Footer>
    </main>
  );
}

export default App;
