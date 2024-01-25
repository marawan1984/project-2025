import { Password } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Login = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        onLoginSuccess();
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
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained" onClick={onClick}>
            Login
          </Button>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </Paper>
    </div>
  );
};


export default Login;
