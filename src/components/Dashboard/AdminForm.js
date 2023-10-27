"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useGetRequestRolesQuery } from "src/store/features/role/requestRoleApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateRequestAdminRoleMutation } from "src/store/features/admin/requestAdminApi";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "src/store/features/user/userApiSlice";
import { setCurrentUser } from "src/store/features/auth/authSlice";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("User Name is required"),
  roleId: Yup.string().required("Please select at least one role"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(
      8,
      "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const initialValues = {
  username: "",
  roleId: "",
  email: "",
  verified: false,
  password: "",
  confirmPassword: "",
};

export default function AdminForm() {
  const [id, setId] = useState(0);
  const { data: user, isSuccess, isError } = useGetUserQuery();
  const data = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);
  useEffect(() => {
    setId(user?.data?.id);
    [];
  });

  // success alert
  const notify = () => {
    toast.success("Admin ត្រូវបានបញ្ចូលដោយជោគជ័យ!", {
      theme: "colored",
      icon: "🚀",
      autoClose: 1000,
      position: "top-center",
    });
  };
  // error alert
  const notifyError = () => {
    toast.error("មិនអាចបញ្ចូល Admin!", {
      theme: "colored",
      autoClose: 1000,
      icon: "🚀",
      position: "top-center",
    });
  };

  //post admin by devide role
  const { data: role, isLoading, error } = useGetRequestRolesQuery();
  const [createAdmin] = useCreateRequestAdminRoleMutation();
  const postAdmin = async (values) => {
    try {
      const response = await createAdmin(values);
      if (response?.data?.code == 200) {
        // Successful response
        notify();
      } else {
        // Error response
        notifyError();
      }
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white">
        Create Admin
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.userId = id;
          setTimeout(() => {
            postAdmin(values);
            setSubmitting(false);
            resetForm({
              values: {
                username: "",
                roleId: 0,
                email: "",
                verified: false,
                password: "",
                confirmPassword: "",
              },
            });
          }, 400);
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
          <Form>
            <section className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <article className="grid grid-cols-2 gap-4 mb-2 ">
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className={
                      touched.username && errors.username
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    }
                    placeholder="Your name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  <ErrorMessage
                    name="username"
                    component="p"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="roles"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Roles
                  </label>
                  <Field
                    as="select"
                    id="roleId"
                    name="roleId"
                    className={
                      touched.roleId && errors.roleId
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                        : "text-gray-700 bg-slate-100 w-full border border-gray-300 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-cyan-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-cyan-200 dark:hover:bg-cyan-200 dark:focus:ring-cyan-200"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.roleId}
                  >
                    <option value="">-- Select Role --</option>
                    {role?.data
                      ? role.data.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.role}
                          </option>
                        ))
                      : null}
                  </Field>
                  <ErrorMessage
                    name="roles"
                    component="div"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"
                  />
                </div>
              </article>

              <article className="grid grid-cols-2 gap-4 mb-2 ">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@company.com"
                    className={
                      touched.email && errors.email
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"
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

                <div className="mb-6">
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
                    className={
                      touched.password && errors.password
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    }
                    placeholder="Your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"
                  />
                </div>
              </article>
              <div className="mb-6">
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
                  className={
                    touched.confirmPassword && errors.confirmPassword
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  }
                  placeholder="Your confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-500 text-white font-medium py-2.5 px-5 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:focus:ring-cyan-200"
                >
                  Create
                </button>
              </div>
            </section>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </div>
  );
}
