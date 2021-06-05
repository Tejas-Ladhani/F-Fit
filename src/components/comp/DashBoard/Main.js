/*
  TEJAS LADHANI
  17-04-2021

  SHREY MAKWANA
  @ UNKNOWN DATE but FTER 17-04-2021
*/
import "./Main.css";
import { useEffect, useState, useContext } from 'react';
import { db } from '../../../Firebase';
import { UserContext } from '../../contexts/user';
import { LineChart, PiChart, BarChart } from "../../Helper";

function Main() {

  const [user, setUser] = useContext(UserContext);
  var no_savings, no_expense, no_emer;
  const [nosav, setnosav] = useState(0);
  const [noexp, setnoexp] = useState(0);
  const [noemer, setnoemer] = useState(0);
  const [date, setdate] = useState([]);
  const [amount, setamount] = useState([]);
  const [no, setno] = useState([]);
  const [e, sete] = useState([]);

  const [expdate, setexpdate] = useState([]);
  const [expamount, setexpamount] = useState([]);



  useEffect(() => {
    getExpense()
    db.collection("user").doc(user.uid).onSnapshot(function (querySnapshot) {
      if (querySnapshot.data() !== undefined)
        sete([querySnapshot.data().balance, querySnapshot.data().exp, querySnapshot.data().sav, querySnapshot.data().emer])
    }, (err) => { console.log("error occured") });

  }, [])


  function getExpense() {
    db.collection("user").doc(user.uid).collection('expense').onSnapshot(function (querySnapshot) {
      setnosav(querySnapshot.docs.length);
      setexpdate(querySnapshot.docs.map((doc) => (
        (doc.data().date !== null) ? doc.data().date.toDate().toString() : ''
      )))
      setexpamount(querySnapshot.docs.map((doc) => (
        Number(doc.data().amount)
      )))
    }, (err) => { console.log("error occured") });

    db.collection("user").doc(user.uid).collection('savings').onSnapshot(function (querySnapshot) {
      setnoexp(querySnapshot.docs.length);
      setdate(
        querySnapshot.docs.map((doc) => (
          doc.data().date
        ))
      );
      setamount(
        querySnapshot.docs.map((doc) => (
          Number(doc.data().amount)
        ))
      )
    }, (err) => { console.log("error occured") });



    db.collection("user").doc(user.uid).collection('emergency').onSnapshot(function (querySnapshot) {
      setnoemer(querySnapshot.docs.length);
    }, (err) => { console.log("error occured") });
    setno([no_savings, no_expense, no_emer]);
  }

  var OverAll = [{ title: 'Balance', amount: parseInt(e[0]), cardname: 'card1' },
  { title: 'Savings', amount: e[2], cardname: 'card2' },
  { title: 'Expense', amount: e[1], cardname: 'card3' },
  { title: 'Emergency', amount: e[3], cardname: 'card4' },
  ]

  var cards = OverAll.map((value,index) => {
    return (
      <div className={value.cardname} key={index}>
        <h1>{value.title}</h1>
        <p>{value.amount}</p>
      </div>

    )
  })

  var cards_at_top_data = [
    { title: 'Saving Fund', qnty: nosav, faicon: 'fa fa-credit-card fa-2x text-green' },
    { title: 'Emergency Funds', qnty: noemer, faicon: 'fa fa-line-chart fa-2x text-yellow' },
    { title: 'No of Expenses', qnty: noexp, faicon: 'fa fa-credit-card-alt fa-2x text-red' }
  ];


  var cards_at_top = cards_at_top_data.map((value,index) => {
    return (
      <div className="Main__Top__card" key={index}>

        <div className="card_content">
          <div><i
            className={value.faicon}
            aria-hidden="true"
          ></i></div>
          <div><p className="text-primary-p">Number of {value.title}</p></div>
          <div><span className="font-bold text-title">{value.qnty}</span></div>
        </div>
      </div>
    )
  })





  return (
    <>
      <div className="row">
        <div className="col-md-5 col-sm-12 Main__CardTop__container">
          <div>{cards_at_top}</div>
          <div>
            <p style={{ textAlign: 'center' }}>Expected Values</p>
            <div className="Main__Upper_expected_amount_cards">
              <div className="bottom_card_content exp">- {e[1]}</div>
              <div className="bottom_card_content sav">+ {e[2]}</div>
              <div className="bottom_card_content emer">++ {e[3]}</div>

            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-3 ml-md-5 Main__Top_Right_Chart">
          <PiChart array1={[nosav, noemer, noexp]} />
        </div>
      </div>
      <div className="row mt-md-3">
        <div className="col-md-5 ml-md-2 mb-md-2 Main__Bottom__leftCard">
          <LineChart amount={amount} date={date} />
        </div>
        <div className="col-md-6 ml-md-5 mb-md-2 Main__Bottom__rightCard">
          <BarChart expense={expamount} Date={expdate} />
        </div>
      </div>

    </>
  );
};

export default Main;

// On minimizing the window ,main chart must get shrink , as of now, it's hard coded

