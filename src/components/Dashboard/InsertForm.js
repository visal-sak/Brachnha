"use client";
import { Formik, Form, Field } from "formik";
import { setCurrentUser } from "../../store/features/auth/authSlice";
import { useGetUserQuery } from "../../store/features/user/userApiSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateRequestAdminMutation } from "../../store/features/admin/requestAdminApi";

export default function AddForm() {
  const [id, setId] = useState(0);
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery();
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  // success alert
  const notify = () => {
    toast.success("អ្នកប្រើប្រាស់ត្រូវបានបញ្ចូលដោយជោគជ័យ!", {
      theme: "colored",
      icon: "🚀",
      autoClose: 1000,
      position: "top-center",
    });
  };
  // error alert
  const notifyError = () => {
    toast.error("បរាជ័យ!", {
      theme: "colored",
      autoClose: 1000,
      icon: "🚀",
      position: "top-center",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);
  useEffect(() => {
    setId(user?.data?.id), [];
  });

  // removeRefreshToken()

  const initialValues = {
    username: "",
    familyName: "",
    givenName: "",
    userId: 0,
    verified: false,
    image: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //post image thumbnail to api
  const uploadImage = async (values) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/files",
        values.file
      );
      return response.data.data.fileName;
    } catch (error) {
      alert(error.message);
    }
  };

  //Post to api
  const [createUser] = useCreateRequestAdminMutation();
  const postUser = async (values) => {
    try {
      let {
        username,
        familyName,
        givenName,
        userId,
        verified,
        avatar,
        gender,
        email,
        password,
        confirmPassword,
      } = values;

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const userData = JSON.stringify({
        username,
        familyName,
        givenName,
        userId,
        verified,
        avatar,
        gender,
        email,
        password,
        confirmPassword,
      });

      const response = await createUser(userData);
      if (response.data) {
        // Successful response
        notify();
      } else if (response.error) {
        // Error response
        notifyError();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting,resetForm }) => {
          const formImage = new FormData();
          formImage.append("file", values.image);
          const image = await uploadImage({ file: formImage });
          values.avatar = image;
          values.userId = id;
          setTimeout(() => {
            setSubmitting(false);
            postUser(values);
            resetForm({
              values: {
                username: "",
                familyName: "",
                givenName: "",
                userId: 0,
                verified: false,
                image: "",
                gender: "",
                email: "",
                password: "",
                confirmPassword: "",
              },
            });
          }, 400);
        }}
      >
        {(formik) => (
          <Form>
            <div className="mb-6 grid grid-cols-2 gap-20">
              <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-4xl dark:text-white">
                  Add New User
                </h1>
                <div className="mt-5">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="givenName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Given Name
                  </label>
                  <Field
                    type="text"
                    id="givenName"
                    name="givenName"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="given name"
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="familyName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Family Name
                  </label>
                  <Field
                    type="text"
                    id="familyName"
                    name="familyName"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="family name"
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="mail@gmail.com"
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="verificationStatus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Verification Status
                  </label>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        id="isVerified"
                        name="verified"
                        value="true"
                        className="mr-2"
                        required
                      />
                      isVerified
                    </label>
                    <label>
                      <Field
                        type="radio"
                        id="isNotVerified"
                        name="verified"
                        value="false"
                        className="ml-4 mr-2"
                        required
                      />
                      isNotVerified
                    </label>
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="verificationStatus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Male
                  </label>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        className="mr-2"
                        required
                      />
                      Male
                    </label>
                    <label>
                      <Field
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        className="ml-4 mr-2"
                        required
                      />
                      Female
                    </label>
                  </div>
                </div>
               
                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="bg-cyan-500 text-white font-medium py-2.5 px-5 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:focus:ring-cyan-200"
                  >
                    Add User
                  </button>
                </div>
                
              </div>
              <div>
              <div className="mt-24">
                  <label
                    for="dropzone-image"
                    class="flex flex-col relative items-center justify-center w-96 h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <div class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <p class="font-semibold">Click to upload</p> or drag and
                        drop
                      </div>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <Field
                      id="dropzone-image"
                      name="image"
                      type="file"
                      className="hidden"
                      component={DropFileZone}
                    />
                  </label>
                </div>
              </div>
            </div>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </div>
  );
}

function DropFileZone({ field, form }) {
  const [previewImage, setPreviewImage] = useState(null);
  useEffect(() => {
    // Reset previewImage to null after form submission
    if (form.submitCount > 0) {
      setPreviewImage(null);
    }
  }, [form.submitCount]);
  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    form.setFieldValue(field.name, file);
    setPreviewImage(URL.createObjectURL(file));
  };
  return (
    <>
      <input
        id="dropzone-image"
        type="file"
        name="image"
        onChange={handleChange}
        className="hidden"
      />
      {previewImage && (
        <img
          src={previewImage}
          alt="preview"
          className="mt-0 h-full rounded-sm absolute w-full"
        />
      )}
    </>
  );
}
