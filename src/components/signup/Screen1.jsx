"use client";
import axios from "axios";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FirstScreen = ({
  setScreen,
  setEmail, // Make sure you're receiving setEmail as a prop
  setPassword,
  fullname,
  email,
  password,
  confirmPassword,
  setFullname,
  setConfirmPassword,
}) => {
  const router = useRouter();
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validEmail = email && email.match(isValidEmail);
  const isPasswordMatch =
    (password === confirmPassword) & (password?.length >= 8);
  const isSubmitDisabled = !isPasswordMatch;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      username: fullname,
      email,
      password,
      password_confirm: confirmPassword,
    });

    if (fullname.length > 2) {
      await axios
        .post("https://unicdata.pythonanywhere.com/student-register/", {
          username: fullname,
          email,
          password: password,
          // password_confirm: confirmPassword,
        })
        .then((res) => {
          console.log("Successful");
          console.log(res.data);

          toast.success("Successful");
          setScreen("success");
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("error!,Try again..");
        });
    }

    // const auth = getAuth();
    //   createUserWithEmailAndPassword(auth, email, password)
    //       .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         console.log(user);
    //            console.log({
    //       username:fullname,
    //       email,
    //       password,
    //       password_confirm:confirmPassword,
    //       });
    //       // if(user){
    //       //   router.push('/login')
    //       // }

    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //       });
  };

  return (
    <>
      <ToastContainer
        className=" mb-8"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form className=" flex flex-col gap-9" onSubmit={handleSubmit}>
        <p className="font-bold font-montserrat text-[22px] text-center">
          Sign-up
        </p>
        <div>
          <p className=" font-black text-xl pb-1">Welcome to Learn-verse!</p>
          <p>Let's get you started!</p>
        </div>
        <div className=" flex flex-col gap-6">
          <div className=" border border-primary-green h-[60px] rounded-full p-2">
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
              Username
            </p>
            <input
              type="text"
              value={fullname}
              onChange={(e) => e && setFullname(e.target.value)}
              required
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="username"
            />
          </div>
          <div
            className={`${
              validEmail ? "border-primary-green" : "border-pink-700"
            } border h-[60px] rounded-full p-2 `}
          >
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight">
              Email
            </p>
            <input
              type="text"
              value={email}
              onChange={(e) => e && setEmail(e.target.value)} // Use setEmail as a function
              required
              className={`w-full h-full bg-transparent outline-none px-3`}
              placeholder="example@gmail.com"
            />
          </div>
          <div className=" border border-primary-green h-[60px] rounded-full p-2">
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
              Password (8 chars)
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => e && setPassword(e.target.value)} // Use setPassword as a function
              required
              className="w-full h-full bg-transparent outline-none px-3"
              placeholder="password"
            />
          </div>
          <div
            className={` border ${
              isPasswordMatch ? "border-primary-green" : "border-pink-700"
            } h-[60px] rounded-full p-2`}
          >
            <p className=" bg-white w-min mt-[-20px] ml-[30px] px-1 text-[#8a8a8a] text-sm font-extralight whitespace-nowrap">
              Confirm Password
            </p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => e && setConfirmPassword(e.target.value)}
              required
              className=" w-full h-full bg-transparent outline-none px-3"
              placeholder="password"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <button
            className={`bg-primaryButton h-[60px] rounded-full text-white font-semibold text-lg w-full mt-3 ${
              isPasswordMatch && validEmail && fullname.length
                ? ""
                : " opacity-50 cursor-not-allowed"
            }`}
            disabled={isSubmitDisabled}
            onClick={(e) => handleSubmit(e)}
          >
            Continue
          </button>
          <p className="text-zinc-500 text-opacity-80 font-medium text-center">
            OR
          </p>
          <button
            className=" w-full flex justify-center gap-2 border-primary-green border rounded-full "
            type="submit"
          >
            <img src="/google.svg" alt="" />
            <p className=" text-sm font-medium py-1">Continue with Google</p>
          </button>
        </div>
      </form>
      <div className=" flex justify-center">
        <Link className="  text-primary-green" href={"/login"}>
          Login
        </Link>
      </div>
    </>
  );
};

export default FirstScreen;
