import { useParams } from "react-router-dom"

const RegisterPage = () => {
    const { id } = useParams();
    console.log(id);
    return <p>This is a register page</p>
}

export default RegisterPage