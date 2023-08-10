import './App.css';
import Header from './components/Header/Header';
import Learners from './components/Learners/Learner';
import Tutors from './components/Tutors/Tutors';
import FocusArea from './components/FocusArea/FocusArea';
import Reasons from './components/Reasons/Reasons';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import Advantages from './components/Advantages/Advantages';
import Faqs from './components/Faqs/Faqs';
import Cta from './components/CTA/Cta';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Header />
      <Learners />
      <Tutors />
      <FocusArea />
      <Reasons />
      <Process />
      <Testimonials />
      <Advantages />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
