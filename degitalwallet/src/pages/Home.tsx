import Picbg from "../pages/picbg.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  fetch("http://localhost:3000/").then((result) => console.log(result.json()));

  return (
    <>
      <div>
        <div>
          <img
            src={Picbg}
            alt="picbg"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
          />
        </div>
        <div style={{ marginTop: "100vh" }}>
          <div style={{ color: "white" }}>
            The button below will take you to our Transaction page 
            <br/> 
            to start you
            journey with in the digital financial world{" "}
          </div>
          <br/>
          <Link to="/transactions">
            <Button variant="contained" color="primary">
              Wallet
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
