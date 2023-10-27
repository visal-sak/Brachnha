"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setCredentials } from "../../../../store/features/auth/authSlice";
import { useLoginMutation } from "../../../../store/features/auth/authApiSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useCreateRequestSendMailMutation } from "src/store/features/user/userApiSlice";
import { getSession, signIn } from "next-auth/react";





// least 6 characters long, contains at least one uppercase letter, one lowercase letter, and one number
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
// ^ start at the beginning of the string
// (?=.*?[A-Z]) contain at least one uppercase letter
// (?=.*?[a-z]) contain at least one lowercase letter
// (?=.*?[0-9]) contain at least one number
// .{6,} are at least 6 characters long
// $ end at the end of the string

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      passwordRegex,
      "Password must be at least 6 characters, a number, an Uppercase, and a Lowercase"
    ),
});

export default function LoginForm() {

  const handleGoogle=() => {
    signIn("google")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        if(session!==null){
          localStorage.setItem("hasUserNotLogging", 0);
          router.push("/")
        }
      } catch (error) {
        console.error(error);
      }
    };

    console.log("Fetching data...");
    fetchData();
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

    // eye toggle
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // forgot password
      const toggleForgotPasswordVisibility = () => {
        setShowForgotPassword((prevState) => !prevState);
      };

      const handleCloseForgotPasswordModal = () => {
          setShowForgotPassword(false);
        };

  const handleSubmit = async ({ email, password }) => {
    try {
      // .unwrap() is a utility function that will return either the fulfilled value or throw the rejected value as an error.
      const { data } = await login({ email, password }).unwrap();
      dispatch(setCredentials(data));
      localStorage.setItem("hasUserNotLogging", 0);
      router.push('/')
    } catch (error) {
      if (!error.response) {
        toast.error("Can't Login Try again", {
          theme: "colored",
          icon: "❌",
          autoClose: 1000,
          position: "top-center",
        });
      } else if (error.response.status === 400) {
        toast.error("Missing email or password", {
          theme: "colored",
          icon: "❌",
          autoClose: 1000,
          position: "top-center",
        });
      } else if (error.response.status === 403) {
        toast.error(
          "Forbidden - You don't have permission to access this resource",
          {
            theme: "colored",
            icon: "❌",
            autoClose: 1000,
            position: "top-center",
          }
        );
      }
    }
  };

  const initialValuesMail = {
    email: "",
  };

  const validationSchemaMail = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required email"),
  });

  const [sendMail]=useCreateRequestSendMailMutation();
  const handleSubmitMail = (values, { setSubmitting }) => {
    // Handle form submission here
    sendMail(values)
    setSubmitting(false);
    // You can add the API call to send the reset password email here
    toast.success("A password reset email has been sent to your email address!", {
      autoClose: 1000,
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            handleSubmit(values);
            resetForm();
          }, 500);
        }}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <div class="mx-0 my-1 lg:my-0 lg:h-screen flex flex-col justify-center items-center px-6 pt-6 pt:mt-0">
            <div className="w-full md:max-w-screen-lg">
              <Form class="bg-slate-50 shadow-0 rounded-lg flex items-center justify-center sm:h-0 md:h-[600px] md:mt-0 w-full lg:max-w-screen-lg lg:h-auto 3xl:max:max-w-screen-2xl xl:p-0">
                <div class="hidden lg:block lg:w-full lg:h-auto">
                  <img
                    class="rounded-l-lg object-cover w-full h-[640px]"
                    src="../../../images/rooms.jpg"
                    alt="login image"
                  />
                </div>
                <div class="w-full p-6 sm:p-8 md:p-16 lg:py-0 space-y-8 lg:w-1/2">
                  <h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    ចូលលេង
                  </h2>
                  <div class="mt-4 mb-4 space-y-6">
                    <div>
                      <label
                        for="email"
                        class="text-sm font-medium text-gray-900 block mb-2"
                      >
                        អុីម៉ែល
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className={
                          touched.email && errors.email
                            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                            : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="name@gmail.com"
                        required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="relative">
                      <label
                        for="password"
                        class="text-sm font-medium text-gray-900 block mb-2"
                      >
                        ពាក្យសម្ងាត់
                      </label>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder=""
                        className={
                          touched.password && errors.password
                            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                            : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-10 right-2 text-gray-700 hover:text-gray-400 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div class="flex items-start">
                      <button
                        type="button"
                        class="text-sm text-teal-700 hover:underline ml-auto cursor-pointer"
                        onClick={toggleForgotPasswordVisibility}
                      >
                        ភ្លេចពាក្យសម្ងាត់?
                      </button>
                    </div>
                    <button
                      disabled={
                        isSubmitting || (touched.password && errors.password)
                      }
                      type="submit"
                      className={`middle none center mb-2 w-full rounded-lg py-3 px-6 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg focus:shadow-none active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
                        touched.password && errors.password
                          ? "bg-red-500 hover:bg-red-600 focus:bg-red-500"
                          : "bg-teal-500 hover:bg-teal-600 focus:bg-teal-500"
                      }`}
                      data-ripple-light="true"
                    >
                      {isSubmitting ? "កំពុងចូលហ្គេម..." : "ចូលលេង"}
                    </button>
                    <div class="mb-2 grid grid-cols-3 items-center text-gray-500">
                      <hr class="border-gray-500" />
                      <p class="text-center text-sm">OR</p>
                      <hr class="border-gray-500" />
                    </div>
                    <div>
                      <button
                        onClick={handleGoogle}
                        class="cursor-pointer p-2.5 bg-slate-100 dark:bg-black dark:text-white border w-full rounded-[16px]"
                      >
                        {" "}
                        <div class="relative flex items-center space-x-4 justify-center">
                          <img
                            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                            class="absolute left-0 w-5"
                            alt="google logo"
                          />
                          <span class="block lg:w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-teal-600">
                            Continue with Google
                          </span>
                        </div>
                      </button>
                    </div>
                    <div class="text-sm font-medium text-gray-500">
                      មិនទាន់មានគណនី?{" "}
                      <Link
                        href="/signup"
                        class="text-teal-700 hover:underline hover:text-yellow-500"
                      >
                        បង្កើតគណនី
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
      <ToastContainer />
      {showForgotPassword && (
        <>
          <Formik
            initialValues={initialValuesMail}
            validationSchema={validationSchemaMail}
            onSubmit={handleSubmitMail}
          >
            {({ isSubmitting }) => (
              <Form
                className="fixed z-10 inset-0 overflow-y-auto"
                onClick={handleCloseForgotPasswordModal}
              >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                  <div
                    className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    <div>
                      <h1 className="text-2xl font-bold mb-4 text-center">
                        ភ្លេចពាក្យសម្ងាត់
                      </h1>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <p className="leading-relaxed">
                        បញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលភ្ជាប់ជាមួយគណនីរបស់អ្នក
                        ហើយយើងនឹងផ្ញើតំណទៅអ្នកដើម្បីកំណត់ពាក្យសម្ងាត់របស់អ្នកឡើងវិញ។
                      </p>
                      <div className="mt-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 ${
                            errorMessage &&
                            "bg-red-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                          }`}
                          placeholder="បញ្ចូល email address របស់អ្នក"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-sm text-red-500 mt-1"
                        />
                        {errorMessage && (
                          <p className="text-sm text-red-500 mt-1">
                            {errorMessage}
                          </p>
                        )}
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="middle none center w-36 rounded-lg bg-teal-500 py-3 px-6 text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          ផ្ញើ Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="../../../images/leaveTink.png"
                  alt="land"
                  className=" w-28 top-40 md:w-36 lg:w-44 xl:w-48 absolute left-64 -bottom-32 md:left-[600px] md:top-20 md:-bottom-10 lg:left-[640px] lg:top-9 xl:left-[900px] xl:top-[84px] bounce"
                />
                <img
                  src="../../../images/poohh.png"
                  alt="land"
                  className=" w-20 -bottom-10 md:w-24 lg:w-28 xl:w-36 absolute left-4 md:left-10 md:top-96 lg:left-44 lg:bottom-12 xl:left-96 xl:top-80 xl:bottom-0 bounce"
                />
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}
