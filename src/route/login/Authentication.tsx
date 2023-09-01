import Icon from "../../components/Icon.tsx";
import FormLogin from "./FormLogin";
import Img from "../../assets/ImgLogin-removebg.png";

function Login() {
  return (
    <div className="h-screen  sm:flex flex justify-center items-center bg-gradient-to-r from-lime-300 to-green-200">
      <div
        className=" sm:flex w-[80%] mx-auto sm:w[80%]  h-[80%] rounded-[1.5rem]  bg-white bg-opacity-50 shadow-lg shadow-fiord-cfg-500/20
       "
      >
        <div
          className="w-[60%] h-full  border-solid rounded-l-2xl 
          justify-center items-center p-4 hidden sm:flex
        "
        >
          <img src={Img} alt="" className="object-contain hidden sm:flex" />
        </div>
        <div className="w-[80%] h-full mx-auto sm:w-[35%] border-solid rounded-r-2xl flex justify-start items-center sm:px-2 sm:py-1">
          <FormLogin></FormLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
// flex justify-center items-center text-center
// bg-gradient-to-r from-lime-300 to-green-200
