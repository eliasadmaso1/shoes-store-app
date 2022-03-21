import { Link } from "react-router-dom";
import './accessories.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Navbar from "../../Feauters/NavBar/Navbar";



export default function Accessories() {



  return (
  <div className="accessories">
    <Navbar/>
      <main className="buttons">
      <Link to="Bags" ><Button type="black" className="link">Bags</Button></Link>
      <Link to="Hats"><Button type="black" className="link">Hats</Button></Link> 
      <Link to="Socks"> <Button type="black" className="link">Socks</Button></Link>
      <Link to="Balls"> <Button type="black" className="link">Balls</Button></Link>
      </main>
      <section className="background">
          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3ffd5908-483c-4ef4-879c-bf2dc70dd902/brasilia-winterized-training-duffel-bag-9krC2F.png" />

      </section>
      
          </div>
  );
}
