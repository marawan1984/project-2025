import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";


const Transactionchoise = () => {
  const [visible, setVisible] = React.useState(false);
  

  return (
    <div>
      <br/>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Close" : "Transactions"}
      </button>

      {visible && <>
      <br/>
      <br/>
      <Link to="/Withdraw">Withdraw </Link>
      <br/>
      <br/>
      <Link to="/Deposit">Deposit </Link>
      </>
   }
    </div>
  );
};

function createData(date, amount) {
  return { date, amount };
}



const rows = [
  createData(new Date(2024, 1, 13).toISOString(), 200),
  createData(new Date(2024, 1, 16).toISOString(), -100),
  createData(new Date(2024, 1, 17).toISOString(), 450),
];
 


export default function Transaction() {
  return (
    <>
    <div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    <div>
     <Transactionchoise/>
     </div>
     </>

  );
}
