import { Card } from "react-bootstrap";
import "../assets/css/style.css";
import fotoRopa from "../../public/ropaHome.png";


export const Home = () => {
    return (
        <div style={{backgroundColor:"black"}}>
            <div>
                <Card style={{backgroundColor:"#1d1b1b"}} className="shadows">
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-7" style={{color:"white"}}>
                                <h1 >CLOTHINS SALE</h1>
                                <h4>Discount</h4>
                            </div>
                            <div className="col-md-4">
                                <img src={fotoRopa} alt="" />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
