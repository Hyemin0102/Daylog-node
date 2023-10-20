import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () =>{
  return (
  <AuthTemplate>
    <RegisterForm />
  </AuthTemplate>
  )
};

export default RegisterPage;

/*   const [text, setText] = useState('');

  const sendReq = async() =>{
    const response = await axios.get('http://localhost:4000/api');
    setText(response.data.hello);
  };

  useEffect(()=>{
    sendReq();
  },[])*/