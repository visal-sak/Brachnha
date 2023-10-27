"use client";


import react from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setCurrentUser } from "../../store/features/auth/authSlice";
import { useGetUserQuery } from "../../store/features/user/userApiSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";
import axios from "axios";
import * as Yup from "yup";
import PopUpOp from "./PopUpOp"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateRequestGameCalculateMutation } from "../../store/features/games/calculate/requestCalculateGame";

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
  questionImage: "",
  questionValue: [],
  questionValueKh: [],
  questionResult: 0,
  answerValue: [],
  answerValueKh: [],
};

 const FILE_SIZE = 1024 * 1024 * 10; // 10MB
 const SUPPORTED_FORMATS = [
   "image/jpg",
   "image/jpeg",
   "image/gif",
   "image/png",
 ];


export default function GameCalculate({ subjects, grades, gametypes }) {
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
      toast.success("Game operation ត្រូវបានបញ្ចូលដោយជោគជ័យ!", {
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
    setAnswerValue([]);
    setQuestionValue([]);
  };

  //Post to api
  const [postGame]=useCreateRequestGameCalculateMutation()
  const postGameCalculate = async (values) => {
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
      questionValue,
      questionValueKh,
      questionResult,
      answerValue,
      answerValueKh,
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
      questionValue,
      questionValueKh,
      questionResult,
      answerValue,
      answerValueKh,
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

  const [questionValue, setQuestionValue] = useState(
    initialValues.questionValue
  );
  const [questionValueKh, setQuestionValueKh] = useState(
    initialValues.questionValueKh
  );

  const [answerValue, setAnswerValue] = useState(initialValues.answerValue);
  const [answerValueKh, setAnswerValueKh] = useState(
    initialValues.answerValueKh
  );

  const handleAddQuestionValue = () => {
    setQuestionValue(questionValue.concat(""));
    setQuestionValueKh(questionValueKh.concat(""));
  };
  const handleRemoveQuestionValue = (index) => {
    setQuestionValue(questionValue.filter((_, i) => i !== index));
    setQuestionValueKh(questionValueKh.filter((_, i) => i !== index));
  };

  const handleAddAnswerValue = () => {
    setAnswerValue(answerValue.concat(""));
    setAnswerValueKh(answerValueKh.concat(""));
  };

  const handleRemoveAnswerValue = (index) => {
    setAnswerValue(answerValue.filter((_, i) => i !== index));
    setAnswerValueKh(answerValueKh.filter((_, i) => i !== index));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        // add audio
        try {
          const questionAudio = await uploadAudio(values.audio);
          values.questionAudio = questionAudio;

          // Continue with the rest of the form submission logic
        } catch (error) {
          // Handle error
        }
        //add image thumnail
        const formData = new FormData();
        formData.append("file", values.file);
        const thumbnail = await uploadImage({ file: formData });

        values.thumbnail = thumbnail;
        values.userId = id;

        setTimeout(() => {
          setSubmitting(false);
          postGameCalculate(values).then((resp) => {
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
              questionImage: "",
              questionValue: [],
              questionValueKh: [],
              questionResult: [],
              answerValue: [],
              answerValueKh: [],
            },
          });
        }, 400);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white">
            បង្កើតហ្គេមOperation
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
                    placeholder="GOT..."
                    pattern="GOT[A-Za-z0-9]*-[0-9]*"
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
                      for="dropzone"
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
                        id="dropzone"
                        name="file"
                        type="file"
                        className="hidden"
                        component={DropThumbnailZone}
                      />
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
              <div class="mb-6">
                <label
                  for="large-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  បញ្ចូលកម្រងសំណួរនៃហ្គេម
                </label>
                <Field
                  type="text"
                  name="questionText"
                  id="large-input"
                  placeholder="បញ្ចូលកម្រងសំណួរនៃហ្គេម......."
                  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name="questionText">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                {questionValue.map((_, index) => (
                  <div>
                    <div className="mb-2">
                      <div className="mb-6">
                        <label
                          for="subjects"
                          class="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white"
                        >
                          បញ្ចូលតម្លៃនៃGameជាលេខអង់គ្លេស
                        </label>
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestionValue(index)}
                          class="text-white relative left-[338px] bottom-6 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
                        <Field
                          type="number"
                          name={`questionValue[${index}]`}
                          placeholder="Type here"
                          class="input input-bordered input-warning w-full max-w-xs"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="mb-6">
                        <label
                          for="subjects"
                          class="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white"
                        >
                          បញ្ចូលតម្លៃនៃGameជាលេខខ្មែរ
                        </label>
                        <button
                          type="button"
                          class="text-white relative left-[338px] bottom-6 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
                        <Field
                          type="text"
                          name={`questionValueKh[${index}]`}
                          placeholder="Type here"
                          class="input input-bordered input-warning w-full max-w-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddQuestionValue}
                class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                បន្ថែម
              </button>
            </div>
            <article className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="flex flex-wrap justify-evenly">
                <div className="mb-6">
                  <label
                    for="subjects"
                    class="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white"
                  >
                    បញ្ចូលAudio នៃហ្គេម
                  </label>
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
                <div className="mb-6">
                  <label
                    for="subjects"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    បញ្ចូលចម្លើយនៃហ្គេម
                  </label>
                  <Field
                    type="text"
                    name="questionResult"
                    placeholder="Type here"
                    class="input input-bordered input-info w-full max-w-xs"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    {answerValue.map((_, index) => (
                      <div>
                        <div className="my-4">
                          <button
                            type="button"
                            onClick={() => handleRemoveAnswerValue(index)}
                            class="text-white relative left-[200px] top-10 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
                          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            បញ្ចូលចម្លើយនៃហ្គេមជាលេខអង់គ្លេស
                          </label>
                          <div>
                            <Field
                              type="number"
                              name={`answerValue[${index}]`}
                              placeholder="Type here"
                              class="input input-bordered input-accent w-full max-w-xs"
                            />
                          </div>
                        </div>
                        <div className="my-10">
                          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            បញ្ចូលចម្លើយនៃហ្គេមជាលេខខ្មែរ
                          </label>
                          <div>
                            <Field
                              type="text"
                              name={`answerValueKh[${index}]`}
                              placeholder="Type here"
                              class="input input-bordered input-accent w-full max-w-xs"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddAnswerValue}
                class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                បន្ថែម
              </button>
            </article>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-4 gap-">
                <button
                  type="submit"
                  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  បង្ហោះ
                </button>
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  លុប
                </button>
                <PopUpOp values={formik.values} />
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
        id="dropzone"
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