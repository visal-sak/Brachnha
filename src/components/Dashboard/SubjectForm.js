import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // import Yup for validation
import axios from "axios";
import { setCurrentUser } from "../../store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../../store/features/user/userApiSlice";
import { useCreateRequestSubjectMutation } from "../../store/features/subject/requestSubjectApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubjectForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    toast.success("មុខវិជ្ជាត្រូវបានបញ្ចូលដោយជោគជ័យ!", {
      theme: "colored",
      icon: "🎉",
      autoClose: 1000,
      position: "top-center",
    });
  };

  useEffect(() => {
    if (isSuccess) {

      dispatch(setCurrentUser(user));
    }
  }, []);

  useEffect(() => {
    setId(user?.data?.id);
    [];
  });

  const initialValues = {
    subject: "",
    description: "",
    route: "",
  };

  const [insertSubject] = useCreateRequestSubjectMutation();

  const postSubject = async (values) => {
    try {
      insertSubject(values);
      notify();
      setIsModalVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const validationSchema = Yup.object().shape({
    subject: Yup.string().required("Subject is required"),
    description: Yup.string().required("Description is required"),
    route: Yup.string().required("Route is required"),
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalVisible(true)}
        class="text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
        បញ្ចូល
      </button>

      {isModalVisible && (
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg px-8 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Add Subject
              </h3>
              <button
                type="button"
                className="text-purple-500 hover:text-purple-500 focus:outline-none"
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

            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                values.userId = id;

                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  postSubject(values).then((resp) => {});
                }, 400);
              }}
              validationSchema={validationSchema} // add validation schema
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="class"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      មុខវិជ្ជា
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className={`bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 ${
                        touched.subject && errors.subject
                          ? "bg-red-100 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                          : "bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <div className="text-red-500">{errors.subject}</div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      ពិពណ៌នា
                    </label>
                    <Field
                      type="text"
                      as="textarea"
                      id="description"
                      name="description"
                      className={`bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                        touched.description && errors.description
                          ? "bg-red-100 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                          : "bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      }`}
                    />
                    {touched.description && errors.description && (
                      <div className="text-red-500">{errors.description}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="route"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Route
                    </label>
                    <Field
                      type="text"
                      id="route"
                      name="route"
                      className={`bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                        touched.route && errors.route
                          ? "bg-red-100 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                          : "bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      }`}
                    />
                    {touched.route && errors.route && (
                      <div className="text-red-500">{errors.route}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-purple-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  >
                    បញ្ចូល
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
