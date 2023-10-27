import React,{useState} from "react";

export default function PopupCompareGame({values}) {
  const imageUrl = values.image ? URL.createObjectURL(values.image) : null;
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
          className="fixed top-0 left-0 right-0 z-50 w-full h-full rounded-xl bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg py-6 w-full md:w-1/2 px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                មើលឡើងវិញហ្គេម Multiple Choice
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
            <h1 class="font-bold text-md md:text-md lg:text-3xl mb-5">
              {values.questionText}
            </h1>
            <section className="mb-10 grid grid-cols-3 xl:grid-cols-3 gap-6">
              {values.files.map((file) => (
                <div class="col-span-1">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="football"
                    class="w-56 object-cover"
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
}
