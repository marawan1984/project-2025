import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";



const Deposit = () => {
  const [deposit, setDeposit] = useState("");

  const onClick = async () => {
    const result = await fetch("http://localhost:3000/deposit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({amount: deposit})
    });
    const response = await result.json();
    
  
    updateBalance(response);
    if (document.getElementById("result")) {  
        document.getElementById("result")!.textContent =
      updateBalance(response).toString();
    }
   function updateBalance(response: { newBalance: number }) {
     const balanceElement = document.getElementById("balance");
      if (balanceElement) {
       balanceElement.textContent = response.newBalance.toString();
      }
     return String(response.newBalance) !== "NaN";
    }

  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
      />
      <Button variant="contained" onClick={onClick}>
        Contained
      </Button>
      <h3> Account Balance </h3>;
      <span id="balance"></span>
    </div>
  );
};



export default Deposit;
