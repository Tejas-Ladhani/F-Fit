import { useState, useEffect } from "react";
import {  Form, Button, Row, Col } from "react-bootstrap";
import "./MarketContext.css";
import { Market } from "../../pages";

function MarketContext() {
  const [cnt, setcnt] = useState(0);
  const [stockfunc, setstockfunc] = useState("TIME_SERIES_DAILY");
  const [apiterm, setapiterm] = useState("Time Series (Daily)");
  const [toggle, settoggle] = useState(false);
  const [temp, settemp] = useState("");
  const [search, setsearch] = useState(""); //search term from the search box
  const [stocks, setstocks] = useState(null); // stock data

  async function fetchData() {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=${stockfunc}&symbol=${search}&outputsize=compact&apikey=K19780Y8NDDIIFMX`
    ); // response from api
    const data = await response.json(); //converting it to json format
    
    setstocks(data); //setting the stock data after succesfull response
    setcnt(cnt + 1);
  }

  useEffect(() => {
    fetchData(); //fetching data when search is being made
  }, [search, stockfunc]); //making an api call when search is being made

  const onSubmit = (e) => {
    e.preventDefault();
    const searchrecieved = {
      search,
    };
    
  };

  return (

    <div className="container-fluid">
      <Form onSubmit={onSubmit}>


        <Row className="mt-4">
          <Col>
            <Form.Group controlId="formBasicStock">
              <Form.Control type="txt" required placeholder="Search Stocks..." value={temp} //setting value to a temp value
                onChange={(e) => {
                  settoggle(false);
                  settemp(e.target.value);
                }} />

            </Form.Group>
          </Col>
          <Col>
            <Button className='mx-3' variant="primary" type="submit" onClick={() => {
              setsearch(temp); //setting the search term after the button is clicked
              settoggle(true);
            }}>
              SEARCH
        </Button>
          </Col>
        </Row>

        <div className="row">

          <Button className='mx-3' variant="primary" type="submit" onClick={() => {
            setstockfunc("TIME_SERIES_MONTHLY");
            setapiterm("Monthly Time Series");
          }}>
            Monthly
    </Button>


          <Button className='mx-3' variant="primary" type="submit" onClick={() => {
            setstockfunc("TIME_SERIES_DAILY");
            setapiterm("Time Series (Daily)");
          }}>
            DAILY
    </Button>

        </div>

      </Form>


      <div className="row">
        <div className="col-md-12">
          <Market stocks={stocks} toggle={toggle} cnt={cnt} apiterm={apiterm} />
        </div>
      </div>

    </div>
  );
}

export default MarketContext;
