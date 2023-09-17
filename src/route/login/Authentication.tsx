import FormLogin from "./FormLogin";
import Img from "../../assets/ImgLogin-removebg.png";

function Login() {
  return (
    <div className="h-screen sm:flex flex justify-center items-center bg-gradient-to-r from-lime-300 to-green-200">
      <div
        className=" w-[80%] mx-auto p-4 sm:w[80%] flex flex-col justify-center items-center sm:flex-row h-[90%] sm:h-[80%] rounded-[1.5rem]  bg-white bg-opacity-50 shadow-lg shadow-fiord-cfg-500/20
       "
      >
        <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[60%]">
          <img src={Img} alt="" className="object-contain" />
        </div>
        <div className="w-[80%] h-full md:h-full mx-auto md:w-[50%] lg:w-[35%] border-solid rounded-r-2xl flex justify-start items-center sm:px-2 sm:py-1">
          <FormLogin></FormLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
// flex justify-center items-center text-center
// bg-gradient-to-r from-lime-300 to-green-200
