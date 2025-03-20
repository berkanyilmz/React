import {useNavigate} from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <>
        <div>
        Home
        </div>
    <button onClick={ () => navigate('/mission') }>
        Go To Mission
    </button>
        </>
    );
}

export default Home;