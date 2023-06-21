import './Accessories.css';
import 'antd/dist/antd.css';
import Navbar from './Navbar/Navbar';
import acc from '../../../../images/acc.png'

export default function Accessories() {

  return (
  <div className="accessories">
    <Navbar/>
      <div className="background">
          <img src={acc} />
        </div>
      </div>
  );
}
