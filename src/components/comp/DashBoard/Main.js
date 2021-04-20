/*
  TEJAS LADHANI
  17-04-2021
*/
import "./Main.css";

import BarChart from "../charts/BarChart";
import PiChart from "../charts/PiChart";
import LineChart from "../charts/LineChart";

function Main() {
  var OverAll = [{ title: 'Balance', amount: '$5000', cardname: 'card1' },
  { title: 'Investments', amount: '$1000', cardname: 'card2' },
  { title: 'Expense', amount: '$200', cardname: 'card3' },
  { title: 'Savings', amount: '$3000', cardname: 'card4' },
  ]

  var cards = OverAll.map((value) => {
    return (
      <div className={value.cardname}>
        <h1>{value.title}</h1>
        <p>{value.amount}</p>
      </div>

    )
  })


  var cards_at_top_data = [{ title: 'Investments', qnty: '10', faicon: 'fa fa-money fa-2x text-lightblue' },
  { title: 'Savings', qnty: '10', faicon: 'fa fa-credit-card fa-2x text-green' },
  { title: 'Stocks', qnty: '10', faicon: 'fa fa-line-chart fa-2x text-yellow' },
  { title: 'Expense', qnty: '10', faicon: 'fa fa-credit-card-alt fa-2x text-red' },

  ];

  var cards_at_top = cards_at_top_data.map((value) => {
    return (
      <div className="card">

        <div className="card_inner">
          <i
            className={value.faicon}
            aria-hidden="true"
          ></i>
          <p className="text-primary-p">Number of {value.title}</p>
          <span className="font-bold text-title">{value.qnty}</span>
        </div>
      </div>
    )
  })


  return (
    <main className="dashboard">
      <div className="main__container">

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          {cards_at_top}
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}


        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>lorem writing something here</p>
              </div>
              <i className="fa fa-inr" aria-hidden="true"></i>
            </div>
            <BarChart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>write something here</p>
              </div>
              <i className="fa fa-inr" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              {cards}
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}

        <div className="bottom_container" >
          <div className="charts_bottom">
            <PiChart />
          </div>
          <div className="charts_bottom">
            {/* <PolarChart />
             */}
             <LineChart/>
          </div>

        </div>
      </div>

    </main >
  );
};

export default Main;

// On minimizing the window ,main chart must get shrink , as of now, it's hard coded
