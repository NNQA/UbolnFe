import Icon from "../../components/Icon.tsx";
import FormLogin from "./FormLogin";
import Img from "../../assets/ImgLogin-removebg.png";

function Login() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-lime-300 to-green-200">
      <div
        className=" flex w-[80%] h-[80%] rounded-[1.5rem]  bg-white bg-opacity-50 shadow-lg shadow-fiord-cfg-500/20
       "
      >
        <div
          className="w-[60%] h-full  border-solid rounded-l-2xl 
          flex justify-center items-center p-4
        "
        >
          <img src={Img} alt="" className="object-contain    " />
        </div>
        <div className="w-[35%] h-full  border-solid rounded-r-2xl flex justify-start items-center px-2 py-1">
          <FormLogin></FormLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
// flex justify-center items-center text-center
// bg-gradient-to-r from-lime-300 to-green-200
