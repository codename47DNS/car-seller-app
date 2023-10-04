import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect()
{
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/page/1");
        // eslint-disable-next-line
    },[]);
    return (
        <h1>Redirecting...</h1>
    );
}

export default Redirect;