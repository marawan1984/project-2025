import { Password } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material"
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const onClick = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3000/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const user = await result.data;

      console.log(username, user.username);

      if (result.status === 200) {
        setMessage("Login Successful");
        setLoggedIn(true);
      }
    } catch (error) {
      setMessage("Login Failed");
    }
  };

  return (
    <div>
      <h1>hi log in </h1>
      <Paper>
        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained" onClick={onClick}>
            Contained
          </Button>
        </div>
      </Paper>
      <div>{loggedIn && <h2>{message}</h2>}</div>
    </div>
  );
};

export default Login;
