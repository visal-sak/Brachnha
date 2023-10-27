"use client";


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setCurrentUser } from "../../store/features/auth/authSlice";
import { useGetUserQuery } from "../../store/features/user/userApiSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import Popup from "./BoardPopUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateRequestGameMultipleChoiceMutation } from "../../store/features/games/multiple-choice/requestMultipleChoiceGame";


const initialValues = {
  code: "",
  file: null,
  title: "",
  gameTypeId: 0,
  subjectId: 0,
  gradeId: 0,
  userId: 0,
  instructionText: "",
  instructionAudio: "",
  instructionImage: "",
  questionText: "",
  questionAudio: "",
  image: "",
  answerIsCorrect: [],
  answerWord: [],
};


     const FILE_SIZE = 1024 * 1024 * 10; // 10MB
     const SUPPORTED_FORMATS = [
       "image/jpg",
       "image/jpeg",
       "image/gif",
       "image/png",
     ];

export default function GameFormMultiplechoice({subjects,grades,gametypes}) {
  const [isPreviewMode, setPreviewMode] = useState(false);
  const togglePreviewMode = () => {
    setPreviewMode(!isPreviewMode);
  };

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
    toast.success("Game multiple choice ត្រូវបានបញ្ចូលដោយជោគជ័យ!", {
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

  // validation formik
  const validateSchema = Yup.object().shape({
    code: Yup.string().required("Required code game"),
    gradeId: Yup.number().positive().integer(),
    title: Yup.string().required("Required title game "),
    subjectId: Yup.number().positive().integer(),
    gameTypeId: Yup.number().positive().integer(),
    questionText: Yup.string().required("Required questionText"),
    answerWord: Yup.array().of(
      Yup.string().required("Answer word is required")
    ),
    // answerIsCorrect: Yup.array().of(
    //   Yup.string().oneOf(['true', 'false'], 'Please select a correct answer')
    // ),
    file: Yup.mixed()
      .test("fileSize", "File too large", (value) => {
        if (!value) {
          return true;
        }
        return value.size <= FILE_SIZE;
      })
      .test("fileFormat", "Unsupported Format", (value) => {
        if (!value) {
          return true;
        }
        return SUPPORTED_FORMATS.includes(value.type);
      })
      .required("Required"),
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);
  useEffect(() => {
    setId(user?.data?.id);
    [];
  });

  //post image thumbnail to api
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
  //post audio to api
  const uploadAudio = async (audio) => {
    try {
      const formAudio = new FormData();
      formAudio.append("audio", audio);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/audios",
        formAudio,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.data.fileName; // Assuming the response contains the necessary audio information
    } catch (error) {
    }
  };

  //reset data after post
  const resetFiles = () => {
    setAnswerWord([]);
  };

  //Post to api
  const [postGame]=useCreateRequestGameMultipleChoiceMutation()
  const postGameMultipleChoice = async (values) => {
    try{
    let {
      code,
      thumbnail,
      title,
      gameTypeId,
      subjectId,
      gradeId,
      userId,
      instructionText,
      instructionAudio,
      instructionImage,
      questionText,
      questionAudio,
      questionImage,
      answerWord,
      answerIsCorrect,
    } = values;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const userData = JSON.stringify({
      code,
      thumbnail,
      title,
      gameTypeId,
      subjectId,
      gradeId,
      userId,
      instructionText,
      instructionAudio,
      instructionImage,
      questionText,
      questionAudio,
      questionImage,
      answerWord,
      answerIsCorrect,
    });
    const response = await postGame(userData);

    if (response.data) {
      // Successful response
      notify()
      resetFiles();
    } else if (response.error) {
      // Error response
      notifyError()
      resetFiles();
    }
} catch (error) {
}
  };

  const [answerIsCorrect, setAnswerIsCorrect] = useState(
    initialValues.answerIsCorrect
  );
  const [answerWord, setAnswerWord] = useState(initialValues.answerWord);

  const handleAddQuestionValue = () => {
    setAnswerIsCorrect(answerIsCorrect.concat("false"));
    setAnswerWord(answerWord.concat(""));
  };
  const handleRemoveQuestionValue = (index) => {
    setAnswerWord(answerWord.filter((_, i) => i !== index));
    setAnswerIsCorrect(answerIsCorrect.filter((_, i) => i !== index));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        if (!isPreviewMode) {
          // add audio
          try {
            const questionAudio = await uploadAudio(values.audio);

            values.questionAudio = questionAudio;

            // Continue with the rest of the form submission logic
          } catch (error) {
            // Handle error
          }
          const formImage = new FormData();
          formImage.append("file", values.image);
          const questionImage = await uploadImage({ file: formImage });
          //add image thumnail
          const formData = new FormData();
          formData.append("file", values.file);
          const thumbnail = await uploadImage({ file: formData });

          values.thumbnail = thumbnail;
          values.questionImage = questionImage;
          values.userId = id;

          setTimeout(() => {
            setSubmitting(false);
            postGameMultipleChoice(values).then((resp) => {
            });
            resetForm({
              values: {
                code: "",
                file: null,
                title: "",
                gameTypeId: 0,
                subjectId: 0,
                gradeId: 0,
                userId: 0,
                instructionText: "",
                instructionAudio: "",
                instructionImage: "",
                questionText: "",
                questionAudio: "",
                questionImage: null,
                answerIsCorrect: [],
                answerWord: [],
              },
            });
          }, 400);
        }
      }}
    >
      {(formik) => (
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white">
            បង្កើតហ្គេម Multiple Choice
          </h1>
          <Form>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-4 gap-4 mb-2 ">
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    លេខកូដGame
                  </label>
                  <Field
                    type="text"
                    name="code"
                    id="default-input"
                    placeholder="GMC..."
                    pattern="GMC[A-Za-z0-9]*-[0-9]*"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage name="code">
                    {(msg) => <div className="text-red-600">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-6">
                  <div>
                    <label
                      for="grades"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      ថ្នាក់
                    </label>
                    <Field
                      id="gradeId"
                      name="gradeId"
                      as="select"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>ជ្រើសរើស ថ្នាក់</option>
                      {grades.data
                        ? grades.data.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.title}
                            </option>
                          ))
                        : null}
                    </Field>
                    <ErrorMessage name="gradeId">
                      {(msg) => <div className="text-red-600">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mb-6">
                  <div>
                    <label
                      for="subjects"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      មុខវិជ្ជា
                    </label>
                    <Field
                      id="subjectId"
                      name="subjectId"
                      as="select"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>ជ្រើសរើស មុខវិជ្ជា</option>
                      {subjects.data
                        ? subjects.data.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.subject}
                            </option>
                          ))
                        : null}
                    </Field>
                    <ErrorMessage name="subjectId">
                      {(msg) => <div className="text-red-600">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mb-6">
                  <div>
                    <label
                      for="subjects"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      ប្រភេទហ្គេម
                    </label>
                    <Field
                      id="gameTypeId"
                      name="gameTypeId"
                      as="select"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>ប្រភេទហ្គេម</option>
                      {gametypes.data
                        ? gametypes.data.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))
                        : null}
                    </Field>
                    <ErrorMessage name="gameTypeId">
                      {(msg) => <div className="text-red-600">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-2 gap-3  mb-2 ">
                <div class="mb-6">
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex relative flex-col items-center justify-center w-2/3 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                          <p class="font-semibold">Click to upload thumbnail</p>{" "}
                          or drag and drop
                        </div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <Field
                        id="dropzone-file"
                        name="file"
                        type="file"
                        className="hidden"
                        component={DropThumbnailZone}
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }}
                      />{" "}
                    </label>
                    <ErrorMessage name="file">
                      {(msg) => <div className="text-red-600">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                  >
                    បញ្ចូលចំណងជើងGame
                  </label>
                  <Field
                    id="message"
                    type="text"
                    rows="4"
                    as="textarea"
                    name="title"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  />
                  <ErrorMessage name="title">
                    {(msg) => <div className="text-red-600">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-2 gap-3 mb-2 ">
                <div class="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                  >
                    បញ្ចូលរូបភាពនៃសំណួរ
                  </label>
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-image"
                      class="flex flex-col relative items-center justify-center w-96 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                          <p class="font-semibold">Click to upload</p> or drag
                          and drop
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
                    <ErrorMessage name="file">
                      {(msg) => <div className="text-red-600">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    for="subjects"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    បញ្ចូលកម្រងសំណួរ
                  </label>
                  <Field
                    type="text"
                    as="textarea"
                    placeholder="Type here"
                    name="questionText"
                    class="input input-bordered input-info w-full max-w-xs"
                  />
                  <ErrorMessage name="questionText">
                    {(msg) => <div className="text-red-600">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-4 gap-5 mb-2 ">
                <div className="mb-6">
                  <div class="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-audio" className="block">
                      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            <p className="font-semibold">Click to upload</p> or
                            drag and drop
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Audio files only (MP3, WAV, etc.)
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <Field
                          id="dropzone-audio"
                          name="audio"
                          accept="audio/*"
                          type="file"
                          className="hidden"
                          component={DropAudioZone}
                        />
                      </div>
                    </label>
                  </div>
                </div>
                {answerWord.map((_, index) => (
                  <div class="mb-6">
                    <label
                      for="subjects"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      បញ្ចូលពាក្យចម្លើយ
                    </label>
                    <Field
                      type="text"
                      id="large-input"
                      name={`answerWord[${index}]`}
                      placeholder="Type here"
                      class="input input-bordered input-info w-full max-w-xs"
                    />
                    <button
                      onClick={() => handleRemoveQuestionValue(index)}
                      type="button"
                      class="text-white relative left-[255px] bottom-[70px] bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span class="sr-only">Icon description</span>
                    </button>
                    <div className="mb-5">
                      <div class="flex items-center pl-3">
                        <Field
                          id="isCorrect"
                          type="radio"
                          value="true"
                          name={`answerIsCorrect[${index}]`}
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="horizontal-list-radio-license"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          ចម្លើយត្រឹមត្រូវ
                        </label>

                        <Field
                          id="notIsCorrect"
                          type="radio"
                          value="false"
                          name={`answerIsCorrect[${index}]`}
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="horizontal-list-radio-license"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          ចម្លើយមិនត្រឹមត្រូវ
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddQuestionValue}
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                បន្ថែម
              </button>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-4 gap-4 mb-2 ">
                <button
                  type="submit"
                  class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  បង្ហោះ
                </button>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  លុប
                </button>
                <Popup values={formik.values} />
              </div>
            </div>
            <ToastContainer />
          </Form>
        </div>
      )}
    </Formik>
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


  //set aduio
function DropAudioZone({ field, form }) {
  const [audioFile, setAudioFile] = useState(null);
  useEffect(() => {
    // Reset previewImage to null after form submission
    if (form.submitCount > 0) {
      setAudioFile(null);
    }
  }, [form.submitCount]);
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    form.setFieldValue(field.name, file);
    setAudioFile(URL.createObjectURL(file));
  };

  return (
    <>
      <input
        id="dropzone-audio"
        type="file"
        name="audio"
        accept="audio/*"
        onChange={handleFileChange}
        className="hidden"
      />
      {audioFile && (
        <div className="mt-2">
          <audio controls>
            <source src={audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </>
  );
}