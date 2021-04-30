import SBanner from '../../comp/site-banner/SBanner';
import FBanner from '../../comp/Features-banner/FBanner';
import ABanner from '../../comp/About-banner/ABanner';
import StsBanner from '../../comp/States-Banner/StsBanner';
import { UserContext } from '../../contexts/user';
import Balance from '../../pages/Balance/Balance';
import {useContext} from 'react';

function Landing() {
  const [user, setUser] = useContext(UserContext);
  return (

    <div>
      {user ? <Balance /> :  <div >
      <SBanner/>
      <FBanner/>
      <ABanner/>
      <StsBanner />
    </div> }
    </div>
    
    // <div >
    //   <SBanner/>
    //   <FBanner/>
    //   <ABanner/>
    //   <StsBanner />
    
    // </div>
  );
}

export default Landing;