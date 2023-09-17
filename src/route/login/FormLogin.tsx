import Input from "../../components/Input";
import Button from "../../components/Button";
import { useFormik } from "formik";
import { SignupSchema } from "../../utils/schema/schemaLogin";

interface initialValues {
  email: string;
  password: string;
}

const FormLogin = () => {
  const formik = useFormik<initialValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log(values.email, values.password);
      await fetch(
        "https://f148-118-69-65-61.ngrok-free.app/api/v1/auth/signin",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            userName: "QuocAnhCuto",
            password: "123",
          }),
        }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    },
  });

  console.log(formik.values.email);
  return (
    <div
      className="w-full sm:p-2 px-2 py-4 md:w-full flex flex-col  bg-white bg-opacity-40 rounded-lg shadow-md 
       justify-center gap-4 items-center "
    >
      <div className="text-center mb-5 flex flex-col gap-2">
        <h2>Login your account</h2>
        <p className="text-xs font-medium text-opacity-30 text-black">
          It's free and easy
        </p>
      </div>
      <form
        className="flex flex-col gap-1 w-2/3"
        onSubmit={formik.handleSubmit}
      >
        <Input
          label="Email address"
          input={{
            id: "email",
            type: "text",
            name: "email",
            placeholder: "Enter your email",
            value: formik.values.email,
            onChange: formik.handleChange,
          }}
          touched={formik.touched.email}
          error={formik.errors.email}
          message={formik.errors.email}
        ></Input>
        <Input
          label="Password"
          input={{
            id: "Password",
            type: "password",
            name: "password",
            placeholder: "Enter your password",
            value: formik.values.password,
            onChange: formik.handleChange,
          }}
          touched={formik.touched.password}
          error={formik.errors.password}
          message={formik.errors.password}
        ></Input>
        <div className="mt-2 flex flex-col gap-4">
          <div className="flex gap-2">
            <input type="checkbox" className="items-start " />
            <p className="text-xs font-bold text-fiord-cfg-900 text-opacity-60">
              Remember me
            </p>
          </div>
          <Button
            value={{
              type: "submit",
            }}
            text="Signin"
          ></Button>
        </div>
      </form>
      <div className=" w-2/3 gap-2 text-fiord-cfg-900 text-opacity-80  mt-2">
        <div className="flex justify-center text-center items-center gap-2">
          <hr className="h-[1px] w-[15%] bg-fiord-cfg-900 bg-opacity-50" />
          <p className="text-[12px] font-bold">Or Sign in with</p>
          <hr className="h-[1px] w-[15%] bg-fiord-cfg-900 bg-opacity-50" />
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <div className="h-[2.2rem] w-fit text-fiord-cfg-500 font-medium px-2 gap-2 text-xs flex justify-center items-center  mt-1  border-solid	bg-transparent  rounded-lg shadow-lg shadow-fiord-cfg-500/40">
          <i className="uil uil-apple text-lg"></i>
          <p className="font-bold">Apple</p>
        </div>
        <div className="h-[2.2rem] w-fit text-fiord-cfg-500 font-medium px-2 gap-2 text-xs flex justify-center items-center  mt-1  border-solid	bg-transparent  rounded-lg shadow-lg shadow-fiord-cfg-500/40">
          <i className="uil uil-facebook   text-lg"></i>
          <p className="font-bold">Facebook</p>
        </div>
        <div className="h-[2.2rem] w-fit text-fiord-cfg-500 font-medium px-2 gap-2 text-xs flex justify-center items-center  mt-1  border-solid	bg-transparent  rounded-lg shadow-lg shadow-fiord-cfg-500/40">
          <i className="uil uil-google  font-bold  text-lg"></i>
          <p className="font-bold">Google</p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
