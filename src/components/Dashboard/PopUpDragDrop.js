import { useState } from "react";

export default function PopUpDragDrop({ values }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const audioUrl = values.audio ? URL.createObjectURL(values.audio) : null;

  return (
    <>
      <button
        onClick={() => setIsModalVisible(true)}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="block w-full  text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        មើលឡើងវិញ
      </button>

      {isModalVisible && (
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full md:w-1/2 px-10 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                មើលឡើងវិញហ្គេម DragDrog
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
            <audio
              id="song"
              className="block w-60 h-12 mb-9 border-2 border-emerald-300 rounded-full"
              controls
            >
              <source src={audioUrl} type="audio/mpeg" />
            </audio>
            <h1 className="font-bold text-md md:text-md lg:text-xl mb-5">
              {values.questionText}
            </h1>
            <section className="mb-10 grid grid-cols-3 xl:grid-cols-3 gap-6">
              {values.files.map((file, index) => (
                <div className="col-span-1" key={index}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Image ${index + 1}`}
                    className="w-36 md:w-40 xl:w-44 object-cover"
                  />
                </div>
              ))}
            </section>
            <section className="mb-10 grid grid-cols-3 xl:grid-cols-3 gap-3">
              <div className="col-span-1">
                <button className="btn btn-outline text-md btn-success text-black lg:w-36 lg:h-16 bg-slate-50"></button>
              </div>
              <div className="col-span-1">
                <button className="btn btn-outline text-md btn-success text-black lg:w-36 lg:h-16 bg-slate-50"></button>
              </div>
              <div className="col-span-1">
                <button className="btn btn-outline text-md btn-success text-black lg:w-36 lg:h-16 bg-slate-50"></button>
              </div>
            </section>
            <section>
              <h1 className="font-bold md:text-md lg:text-xl mb-9">
                Choose the correct answer
              </h1>
              <section className="grid grid-cols-3 md:grid-cols-3 gap-20">
                {values.answerWord.map((option, index) => (
                  <article className="col-span-1" key={index}>
                    <article className="inline-block align-bottom md:mx-3">
                      <button className="btn btn-outline text-md btn-success text-black lg:w-36 lg:h-16 bg-slate-50">
                        {option}
                      </button>
                    </article>
                  </article>
                ))}
              </section>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
