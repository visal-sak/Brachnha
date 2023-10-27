import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  useGetRequestSubjectByIdQuery,
  useUpdateRequestSubjectMutation,
} from "../../store/features/subject/requestSubjectApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubjectUpdateForm({ uuid }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    data: subjectData,
    isLoading,
    error,
  } = useGetRequestSubjectByIdQuery(uuid);
  const [updateSubject, { isLoading: isUpdating, error: updateError }] =
    useUpdateRequestSubjectMutation();

  // success alert
  const notify = () => {
    toast.success("មុខវិជ្ជាត្រូវបានកែសម្រួល!", {
      theme: "colored",
      icon: "🎉",
      autoClose: 1000,
      position: "top-center",
    });
  };

  const handleUpdate = async (values) => {
    try {
      await updateSubject({ uuid, ...values });
      notify();
      setIsModalVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const initialValues = {
    subject: subjectData?.data?.subject ?? "",
    description: subjectData?.data?.description ?? "",
    route: subjectData?.data?.route ?? "",
  };

  const validationSchema = Yup.object({
    subject: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    route: Yup.string().required("Required"),
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
        >
          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
        </svg>
      </button>

      {isModalVisible && (
        <div
          className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg px-8 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                កែសម្រួលមុខវិជ្ជា
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
                  <Form>
                    <div className="mb-4">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        មុខវិជ្ជា
                      </label>
                      <Field
                        type="text"
                        id="subject"
                        name="subject"
                        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        required
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        ពិពណ៌នា
                      </label>
                      <Field
                        as="textarea"
                        type="text"
                        id="description"
                        name="description"
                        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        required
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500"
                      />
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
                        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        required
                      />
                      <ErrorMessage
                        name="route"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      disabled={isSubmitting}
                    >
                      {isUpdating ? "កំពុងតែរក្សាទុក..." : "រក្សាទុក"}
                    </button>
                    {updateError && (
                      <div className="text-red-500">{updateError.message}</div>
                    )}
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      )}
    </>
  );
}
