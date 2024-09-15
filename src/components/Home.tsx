import image from "../assets/image.gif";
import Yes from "../assets/heart.png";
import No from "../assets/heart-arrow.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return <>
        <div className="container">
            <h1>Do you love me?</h1>
            <img src={ image } alt="image"/>
            <div className="group">
                <button onClick={ () => navigate('/agree', { replace: true }) }>
                    <img src={ Yes } alt="Yes"/>
                    Yes
                </button>
                <button onClick={ () => navigate('/disagree', { replace: true }) }>
                    <img src={ No } alt="No"/>
                    No
                </button>
            </div>
        </div>
    </>
}
export default Home;