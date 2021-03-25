

import NBar from './components/Navbar/Navbar';
import SBanner from './components/site-banner/SBanner';
import FBanner from './components/Features-banner/FBanner';
import ABanner from './components/About-banner/ABanner';
import StsBanner from './components/States-Banner/StsBanner';
import Footer from './components/Footer/Footer';

function Landing() {
  return (
    <div>
      <NBar />
      <SBanner />
      <FBanner />
      <ABanner />
      <StsBanner />
      <Footer />
    </div>
  );
}

export default Landing;
