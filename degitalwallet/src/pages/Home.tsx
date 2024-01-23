import SearchAppBar from "../components/Appbar";
import { Button } from "@mui/material";


const Home = () => {
  fetch("http://localhost:3000/").then(result => console.log(result.json()));
  return (
     <div>
      <h1>Home</h1>;
      <SearchAppBar />
      <Button variant="contained">login</Button>
      
     </div>
     
     );
}; 

export default Home;

