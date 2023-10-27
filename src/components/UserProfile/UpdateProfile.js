"use client"
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetRequestUserByUuidQuery, useUpdateRequestUserMutation } from "src/store/features/user/userApiSlice";

export default function FormUpdateProfile({ uuid }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    data: userData,
    isLoading,
    error,
  } = useGetRequestUserByUuidQuery(uuid)
  const [updateUser, { isLoading: isUpdating, error: updateError }] =
    useUpdateRequestUserMutation()
  // success alert
  const notify = () => {
    toast.success("Updated Profile Information successfully!", {
      theme: "colored",
      icon: "🎉",
      autoClose: 1000,
      position: "top-center",
    });
  };

  const handleUpdate = async (values) => {
    try {
      await updateUser({ uuid, ...values });
      notify();
      setIsModalVisible(false);
    } catch (error) {
    }
  };

  const initialValues = {
    avatar: userData?.data?.avatar ?? "",
    bio: userData?.data?.bio ?? "",
    familyName: userData?.data?.familyName ?? "",
    givenName: userData?.data?.givenName ?? "",
    username: userData?.data?.username ?? "",
    cover: userData?.data?.cover ?? "",
  };

  const validationSchema = Yup.object({
    familyName: Yup.string().required("Required family name."),
    givenName: Yup.string().required("Required given name."),
    username: Yup.string().required("Required username."),
  });

  return (
    <>
      <button
        onClick={() => setIsModalVisible(true)}
        class="text-blue-700 hover:text-white border my-3 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-[20px]"
          className="w-5"
        >
          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
        </svg>
      </button>

      {isModalVisible && (
        <div
          className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          // onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg px-8 py-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                កែសម្រួល Profile
              </h3>
              <button
                type="button"
                className="text-purple-400 hover:text-purple-500 focus:outline-none"
                onClick={() => setIsModalVisible(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error.message}</div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleUpdate}
              >
                {({ isSubmitting }) => (
                  <Form className="flex flex-col">
                  <Field type="hidden" name="avatar"/>
                      <Field type="hidden" name="cover"/>
                    <div className="mb-4">
                      <label
                        htmlFor="familyName"
                        className="block text-gray-700 font-semibold text-lg mb-2"
                      >
                        Family Name
                      </label>
                      <Field
                        type="text"
                        id="familyName"
                        name="familyName"
                        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
  
                      />
                      <ErrorMessage
                        name="familyName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="givenName"
                        className="block text-gray-700 font-semibold text-lg mb-2"
                      >
                        Given Name
                      </label>
                      <Field
                        type="text"
                        id="givenName"
                        name="givenName"
                        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
        
                      />
                      <ErrorMessage
                        name="givenName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="bio"
                        className="block text-gray-700 font-semibold text-lg mb-2"
                      >
                        Bio
                      </label>
                      <Field
                        as="textarea"
                        type="text"
                        id="bio"
                        name="bio"
                        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-gray-700 font-semibold text-lg mb-2"
                      >
                        Username
                      </label>
                      <Field
                        type="text"
                        id="username"
                        name="username"
                        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        required
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="form-actions mt-4 flex flex-col md:flex-row md:justify-between">
                      <button
                        type="submit"
                        className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={isSubmitting}
                      >
                        {isUpdating ? "កំពុងតែរក្សាទុក..." : "រក្សាទុក"}
                      </button>
                      {updateError && (
                        <div className="text-red-500">
                          {updateError.message}
                        </div>
                      )}
                      <div className="dropdown-menu md:hidden">
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
          <ToastContainer/>
        </div>
      )}
    </>
  );
}
