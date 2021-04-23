// import React from 'react'
// import { Table } from 'react-bootstrap'
// import db from '../../../Firebase'
// function ExpenseMain() {


//     const [expense, setExpense] = useState([]); // will contain the list of expenses



//     // lets display the todos : when should it be fetched  -> At the very first time

//     useEffect(() => {
//         getExpenses();
//     }, []);


//     function getExpenses() {
//         /**
//          * We can have use get instead of snapShot but ss bcz whenever  data is added it will get reflected to our list (display).
//          */

//         db.collection("expense").onSnapshot(function (querySnapshot) {

//             setExpense(
//                 querySnapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     expense_name: doc.data().expense_name,
//                     amount: doc.data().amount,
//                     category: doc.data().category,
//                     date: doc.data().date,
//                 }))
//             );
//         });
//     }

//     var expenseList = expense.map((t) => {
//         return (

//             <ExpenseRow expense_name={t.expense_name}
//                 amount={t.amount}
//                 category={t.category}
//                 date={t.date}
//                 id={t.id}
//             />

//         )
//     }
//     )



//     return (
//         <div>
//             <Table striped bordered hover variant="dark">
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Expense Name</th>
//                         <th>Category</th>
//                         <th>Amount</th>
//                         <th>...</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {expenseList}
//                 </tbody>
//             </Table>
//         </div>
//     )
// }

// export default ExpenseMain
