import { Link } from "react-router-dom";
import './accessories.css';
import { Button } from 'antd';
import 'antd/dist/antd.css'



export default function Accessories() {

   



  return (
  <div className="accessories-Container">
      <div className="accessories-btn">
      <Link to="Bags" ><Button type="black" style={{margin:"5px",fontWeight:"bold"}}>Bags</Button></Link>
      <Link to="Hats"><Button type="black" style={{margin:"5px",fontWeight:"bold"}}>Hats</Button></Link> 
      <Link to="Socks"> <Button type="black" style={{margin:"5px",fontWeight:"bold"}}>Socks</Button></Link>
      <Link to="Balls"> <Button type="black" style={{margin:"5px",fontWeight:"bold"}}>Balls</Button></Link>
      </div>
      <div className="background">
          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3ffd5908-483c-4ef4-879c-bf2dc70dd902/brasilia-winterized-training-duffel-bag-9krC2F.png" />
          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f36bae4-9ca5-43cc-985b-72614519f75c/brasilia-jdi-backpack-rlSZGd.png"/>

      </div>
      
          </div>
  );
}
