/*
  TEJAS LADHANI
  17-04-2021
*/
import "./Main.css";
import {useEffect,useState,useContext} from 'react';
import { db } from '../../../Firebase';
import { UserContext } from '../../contexts/user';
import BarChart from "../charts/BarChart";
import PiChart from "../charts/PiChart";
import LineChart from "../charts/LineChart";

function Main() {

  const [user, setUser] = useContext(UserContext);
  var no_savings, no_expense, no_emer;
  const[nosav,setnosav] = useState(0);
  const[noexp,setnoexp] = useState(0);
  const[noemer,setnoemer] = useState(0);
  const [date, setdate] = useState([]);
  const [amount, setamount] = useState([]);
  const [no, setno] = useState([]);
  const [e, sete] = useState([]);

  const[expdate,setexpdate] = useState([]);
  const[expamount,setexpamount] = useState([]);
  


  useEffect(()=>{
    getExpense()
    db.collection("user").doc(user.uid).onSnapshot(function (querySnapshot) {
     sete([querySnapshot.data().balance,querySnapshot.data().exp,querySnapshot.data().sav,querySnapshot.data().emer])
  }, (err) => { console.log("error occured") });
    
},[])

  
  function getExpense()
  {
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
    setno([no_savings,no_expense,no_emer]);  
}
  console.log(expamount);
  console.log(expdate);
  
  var OverAll = [{ title: 'Balance', amount: parseInt(e[0]), cardname: 'card1' },
  { title: 'Savings', amount: e[2], cardname: 'card2' },
  { title: 'Expense', amount: e[1], cardname: 'card3' },
  { title: 'Emergency', amount: e[3], cardname: 'card4' },
  ]

  var cards = OverAll.map((value) => {
    return (
      <div className={value.cardname}>
        <h1>{value.title}</h1>
        <p>{value.amount}</p>
      </div>

    )
  })

      var cards_at_top_data = [
      { title: 'Saving Fund', qnty:nosav, faicon: 'fa fa-credit-card fa-2x text-green' },
      { title: 'Emergency Funds', qnty: noemer, faicon: 'fa fa-line-chart fa-2x text-yellow' },
      { title: 'No of Expenses', qnty: noexp, faicon: 'fa fa-credit-card-alt fa-2x text-red' },
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
                <h1>Your Porfolio Breakup</h1>
                {/* <p>lorem writing something here</p> */}
              </div>
              <i className="fa fa-inr" aria-hidden="true"></i>
            </div>
            <PiChart array1 = {e}/>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                {/* <p>write something here</p> */}
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
            {/* <PolarChart />
             */}
            <LineChart amount={amount} date={date}/>
          </div>
          <div className="charts_bottom">
          <BarChart expense={expamount} Date={expdate}/>
          </div>
        </div>
      </div>

    </main >
  );
};

export default Main;

// On minimizing the window ,main chart must get shrink , as of now, it's hard coded

// function getData() {
    /**
     * We can have use get instead of snapShot but ss bcz whenever  data is added it will get reflected to our list (display).
     */

    // db.collection("user").doc(user.uid).onSnapshot(function (querySnapshot) {

    //     setData(
    //         querySnapshot.map((doc) => (
    //             {
    //                 id: doc.id,
    //                 date: (doc.data().date !== null) ? doc.data().date.toDate().toString() : '',
    //                 title: (doc.data().title !== null) ? doc.data().title : '',
    //                 amount: (doc.data().amount !=null)? doc.data().amount:0,
    //                 balance : (doc.data().balance !=null) ? doc.data().balance:0,
    //                 exp : (doc.data().exp != null)? doc.data().exp:0,
    //                 savings: (doc.data().savings) ?doc.data().savings:0,
    //                 emergency: (doc.data().emergency)?doc.data().emergency :0,
    //             }))
    //     );
    // }, (err) => { console.log("error occured") });
   
    // db.collection("user").doc(user.uid).get().then(doc => {
     
      //  const tempdata=[
      //     doc.data().exp,
      //     doc.data().balance,
      //     doc.data().sav,
      //     doc.data().emer
      //  ];          
    //     console.log(tempdata);
    //   })
    
    // db.collection("user").doc(user.uid).get().then(doc => {

    //   tempdata=[
    //     doc.data().exp,
    //     doc.data().balance,
    //     doc.data().sav,
    //     doc.data().emer
    //  ]; 
    //  console.log(tempdata);
    //     setdata([...data,{id:tempdata.length,
    //     value: tempdata
    //     }])
    //   // setData(tempdata);            
    // })
// }