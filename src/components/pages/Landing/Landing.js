import { ABanner, FBanner, SBanner, StsBanner } from '../../comp';
import { UserContext } from '../../contexts/user';
import {Balance} from '../../pages';
import { useContext } from 'react';

function Landing() {
  const [user, ] = useContext(UserContext);
  return (

    <div>
      {user ? <Balance /> : <div >
        <SBanner />
        <FBanner />
        <ABanner />
        <StsBanner />
      </div>}
    </div>

  );
}

export default Landing;