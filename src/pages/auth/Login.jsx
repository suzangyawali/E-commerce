import LoginForm from "../../components/auth/LoginForm";
import { REGISTER_ROUTE } from "../../constants/routes";
import { Link } from "react-router-dom";
import loginBg from "../../assets/img/login-bg.png";

const Login = () => {
  return (
    <section className="py-12">
    <img src={loginBg} alt="" className="fixed top-0 left-0 opacity-10 -z-10"/>
    <div className="max-w-screen-xl mx-auto px-4 h-[70vh]">
      <div className="flex flex-col xl:flex-row items-center justify-around h-full">
        <div className="md:w-1/2">
          <p className="text-3xl">Welcome to our</p>
          <h1 className="text-7xl text-teal-700">Shopping Site</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            labore exercitationem ipsum architecto sapiente optio.
          </p>
          <p className="mt-8">
            Do not have an account? Please
            <Link to={REGISTER_ROUTE} className="text-teal-800 ml-2">
              Register
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:px-20 mt-12">
          <LoginForm />
        </div>
      </div>
    </div>
  </section>

  )
};

export default Login;
