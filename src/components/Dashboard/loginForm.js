
"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/features/auth/authSlice";
import { useLoginMutation } from "../../store/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import React from 'react'
import Link from "next/link";



// least 6 characters long, contains at least one uppercase letter, one lowercase letter, and one number
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;

export default function LoginFormAdmin() {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async ({ email, password }) => {
    try {
      // .unwrap() is a utility function that will return either the fulfilled value or throw the rejected value as an error.
      const { data } = await login({ email, password }).unwrap();
      dispatch(setCredentials(data));
      router.push("/dashboard/editor");
    } catch (error) {
      if (!error.response) {
        alert("No Server Response");
      } else if (error.response.status === 400) {
        alert("Missing email or password");
      } else if (error.response.status === 403) {
        alert("Forbidden - You don't have permission to access this resource");
      }
    }
  };


  return (
    <>
      <main className="max-h-screen">
        <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
          <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
            <div class="md:w-1/2 px-5 my-28">
              <h2 class="text-4xl font-bold text-[#002D74]">Admin Login</h2>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                }) => (
                  <Form class="mt-6" action="#" method="POST">
                    <div>
                      <label class="block text-gray-800">Email Address</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email Address"
                        className={
                          touched.email && errors.email
                            ? "bg-red-100 border border-red-500 text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-200 dark:border-red-200 dark:placeholder-red-200 dark:text-white dark:focus:ring-red-400 dark:focus:border-red-300 px-4 py-3 mt-2"
                            : "bg-gray-50 border border-cyan-500 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 px-4 py-3 mt-2"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        autofocus
                        autocomplete
                        required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div class="mt-4">
                      <label class="block text-gray-800">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        minlength="6"
                        className={
                          touched.password && errors.password
                            ? "bg-red-100 border border-red-500 text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-200 dark:border-red-200 dark:placeholder-red-200 dark:text-white dark:focus:ring-red-400 dark:focus:border-red-300 px-4 py-3 mt-2"
                            : "bg-gray-50 border border-cyan-500 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 px-4 py-3 mt-2"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        required
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div class="text-right mt-2">
                      <a
                        href="#"
                        class="text-sm font-meduim text-gray-500 hover:text-cyan-700 focus:text-cyan-700"
                      >
                        Forgot Password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      class="text-white w-full my-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Log In"}
                    </button>
                    <div class="text-left mt-2">
                      <Link
                        href="/"
                        class="text-md font-meduim hover:underline text-gray-500 hover:text-cyan-700 focus:text-cyan-700"
                      >
                        back
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <div class="w-1/2 md:block hidden ">
              <img
                src="../../../images/rooms.jpg"
                class="rounded-2xl w-full h-full"
                alt="page img"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
