import {useNavigate} from "react-router-dom";

function Mission() {

    const navigate = useNavigate();

    return (
        <>
            <div>Mission</div>
            <button onClick={ () => navigate('/')}>Return Home Page</button>
        </>
    );
}

export default Mission;