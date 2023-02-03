import { useParams } from "react-router-dom"

const LoginPage = () => {
    const { id } = useParams();
    console.log(id);
    return <p>This is a login page</p>
}

export default LoginPage