import { Image } from 'react-bootstrap';
import { BDropDown } from '../../comp';
import './Balance.css';
function Balance() {
  return (
    <div className="balance container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 ">
          <BDropDown />
        </div>

        <div className="col-12 col-md-6 mt-2 d-sm-none d-none d-md-block">
          <Image src="img/assets/Balance.png" fluid />
        </div>
        
      </div>
    </div>

  );
}

export default Balance;
