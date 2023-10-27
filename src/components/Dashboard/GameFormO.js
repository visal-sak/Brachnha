import Popup from "./BoardPopUp";

export default function AddGame() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white">
        បង្កើតហ្គេម
      </h1>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
          <div className="grid grid-cols-3 gap-4 mb-2 ">
            <div>
              <label
                for="grades"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ថ្នាក់
              </label>
              <select
                id="grades"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>ជ្រើសរើស ថ្នាក់</option>
                <option value="K">ថ្នាក់មេតេ្តយ្យ</option>
                <option value="F">ថ្នាក់ទី ០១</option>
                <option value="S">ថ្នាក់ទី ០២</option>
              </select>
            </div>
            <div>
              <label
                for="subjects"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                មុខវិជ្ជា
              </label>
              <select
                id="subjects"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>ជ្រើសរើស មុខវិជ្ជា</option>
                <option value="KH">ភាសាខ្មែរ</option>
                <option value="MATH">គណិតវិទ្យា</option>
                <option value="ENG">ភាសាអង់គ្លេស</option>
              </select>
            </div>
            <div>
              <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <div
                  id="mega-menu-full"
                  class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
                >
                  <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <button
                        id="mega-menu-full-dropdown-button"
                        data-collapse-toggle="mega-menu-full-dropdown"
                        class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        {" "}
                        Assets{" "}
                        <svg
                          class="w-5 h-5 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="mega-menu-full-dropdown"
                class="mt-1 border-gray-100 shadow-sm bg-gray-50 md:bg-white border-2 dark:bg-gray-800 dark:border-gray-100"
              >
                <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                  <ul>
                    <li>
                      <img
                        src="/images/football.png"
                        class="block p-3 rounded-lg w-28 h-28"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/football.png"
                        class="block p-3 rounded-lg w-28 h-28 "
                      />
                    </li>
                    <li>
                      <img
                        src="/images/football.png"
                        class="block p-3 rounded-lg w-28 h-28 "
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="/images/football.png"
                        class="block p-3 rounded-lg w-28 h-28 "
                      />
                    </li>
                    <li>
                      <img
                        src="/images/football.png"
                        class="block p-3 rounded-lg w-28 h-28 "
                      />
                    </li>
                    <li>
                      <img
                        src="/images/football.png"
                        class="block p-3 rounded-lg w-28 h-28 "
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-2 ">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="តើបាល់នេះមានចំនួនប៉ុន្មាន?"
              />
            </div>
            <div className=" col-start-3 p-3">
              <button
                type="button"
                class="block w-full  text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Draft
              </button>
              <Popup />
            </div>
            <div className=" col-start-1">
              <div class="mb-10 grid grid-cols-4 gap-32">

                <div class="col-span-1">
                  <label
                    for="dropzone-file"
                    class=" w-28 h-28 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 mb-3 text-gray-400"
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
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
                <div class="col-span-1">
                  <div

                    class=" w-28 h-28 flex flex-col items-center justify-center border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <img src="/images/football.png" />

                  </div>
                </div>

                <div class="col-span-1">
                  <div
                    class=" w-28 h-28 flex flex-col items-center justify-center border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <img src="/images/football.png" />
                  </div>
                </div>

                <div class="col-span-1">
                  <div
                    class=" w-28 h-28 flex flex-col items-center justify-center border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <img src="/images/football.png" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-start-1 col-span-2 ">
              <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">បញ្ចូលចម្លើយ +</button>
              <button class="block-inline items-center justify-center w-40 h-10 rounded mt-10">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-30 h-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-wrap gap-3 pt-5 pb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>

                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      upload an audio
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </button>
            </div>
            <div className=" col-start-1">
              <div class="mb-10 grid grid-cols-3 gap-32">

                <div class="col-span-1">
                  <div
                    class=" w-28 h-28 flex flex-col items-center justify-center border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white"> 1</h1>
                  </div>
                </div>
                <div class="col-span-1">
                  <div
                    class=" w-28 h-28 flex flex-col items-center justify-center border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white"> 2</h1>

                  </div>
                  <div class="grid grid-cols-2 gap-2 mb-4 my-2">

                    <div className="grid grid-cols-2 gap-2 w-full">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-checkbox" class="ml-5 text-xs font-light text-gray-900 dark:text-gray-300 inline-block">ចម្លើយត្រឹមត្រូវ</label>
                    </div>
                    {/* <div className="col-span-1">
                      <label for="default-checkbox" class="ml-2 text-xs font-light text-gray-900 dark:text-gray-300">ចម្លើយត្រឹមត្រូវ</label>
                    </div> */}
                    
                  </div>
                </div>
                <div class="col-span-1">
                  <div
                    class=" w-28 h-28 flex flex-col items-center justify-center border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-4xl dark:text-white"> 3</h1>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-3 gap-2">
                <button
                  type="button"
                  class="block w-full  text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  ផុស
                </button>
                <button
                  type="button"
                  class="block w-full  text-white bg-yellow-500 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  កែសម្រួល
                </button>
                <button
                  type="button"
                  class="block w-full  text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  លុប
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
