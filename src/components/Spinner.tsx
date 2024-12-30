import { FadeLoader } from "react-spinners";
import "../styles/Spinner.scss";

const Spinner = () => {
    return (
        <div className='Spinner'>
            <FadeLoader color="#36d7b7"/>
        </div>
    )
}

export default Spinner;