import SBanner from '../../comp/site-banner/SBanner';
import FBanner from '../../comp/Features-banner/FBanner';
import ABanner from '../../comp/About-banner/ABanner';
import StsBanner from '../../comp/States-Banner/StsBanner';

function Landing() {
  return (
    <div>
      <SBanner/>
      <FBanner/>
      <ABanner/>
      <StsBanner />
    </div>
  );
}

export default Landing;