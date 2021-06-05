import {LineChart2} from '../../Helper';
import './Market.css';
function Market(props) {

  let stockopenvalue = [];
  let stockdate = [];
  if (props.toggle != false && props.cnt > 1) {
    console.log(props.apiterm);
    var stockmetadata = props.stocks['Meta Data']['2. Symbol'];
    const stockdata = props.stocks[props.apiterm];
    for (var key in stockdata) {
      stockdate.push(key);
      stockopenvalue.push(stockdata[key]['1. open']);
    }


    console.log(props.stocks);
    console.log(stockmetadata);
    console.log(stockdata);

    console.log(stockopenvalue);

  }
  return (
    <div >
      <div className="graph">
        <LineChart2 array1={stockopenvalue.reverse()}
          array2={stockdate.reverse()} />
      </div>
    </div>);
}


export default Market;
