"use client"
import { useEffect, useState } from "react";
import { Formik, Form, Field} from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetRequestUserByUuidQuery, useUpdateRequestUserMutation } from "src/store/features/user/userApiSlice";
import axios from "axios";

export default function FormUpdateProfileCover({ uuid }) {
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
    toast.success("Updated Subject successfully!", {
      theme: "colored",
      icon: "🎉",
      autoClose: 1000,
      position: "top-center",
    });
  };
  // fail alert
  const notifyError = () => {
    toast.error("Failed to update cover!!!", {
      theme: "colored",
      icon: "🎉",
      autoClose: 1000,
      position: "top-center",
    });
  };



  const initialValues = {
    avatar: userData?.data?.avatar ?? "",
    bio: userData?.data?.bio ?? "",
    familyName: userData?.data?.familyName ?? "",
    givenName: userData?.data?.givenName ?? "",
    username: userData?.data?.username ?? "",
    file: userData?.data?.cover ?? "",
  };

   //post image profile to api
   const uploadImage = async (values) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/files",
        values.file
      );
      return response.data.data.fileName;
    } catch (error) {
    }
  };

  const handleUpdate = async (values) => {
     const response= await updateUser({ uuid, ...values});
     if (response?.data?.code==200) {
      toast.success(response.data.message, {
        autoClose: 3000,
      });
      setIsModalVisible(false);
    } else{
        notifyError()
    }
  };


  return (
    <>
      <button
        onClick={() => setIsModalVisible(true)}
        class="left-2 outline-none  z-40 top-0 absolute min-w-full h-48  border my-3 border-transparent hover:bg-transparent focus:outline-none  font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
      </button>

      {isModalVisible && (
        <div
          className="fixed  z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg px-8 py-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                កែសម្រួល Cover
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
                onSubmit={async (values, { setSubmitting, resetForm }) => {
             //add image thumnail
             const formData = new FormData();
             formData.append("file", values.file);
             const cover = await uploadImage({ file: formData });

             values.cover = cover;
             setTimeout(() => {
          setSubmitting(false);
          handleUpdate(values).then((resp) => {
          });
          resetForm({
            values: {
              file: "",
            },
          });
        }, 400);
                }}
              >
                {({ formik }) => (
                  <Form className="flex flex-col">
                  <Field type="hidden" name="username"/>
                  <Field type="hidden" name="avatar"/>
                  <Field type="hidden" name="bio"/>
                  <Field type="hidden" name="givenName"/>
                  <Field type="hidden" name="familyName"/>
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex   relative flex-col items-center justify-center w-5/6 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                      </div>
                      <Field
                        id="dropzone-file"
                        name="file"
                        type="file"
                        className="hidden"
                        component={DropThumbnailZone}
                        // onChange={(event) => {
                        //   setFieldValue("file", event.currentTarget.files[0]);
                        // }}
                      />{" "}
                    </label>
                  </div>
    
                      
                    <div className="form-actions mt-4 flex flex-col md:flex-row md:justify-between">
                      <button
                        type="submit"
                        className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
function DropThumbnailZone({ field, form }) {
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
        id="dropzone-file"
        type="file"
        name="file"
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
