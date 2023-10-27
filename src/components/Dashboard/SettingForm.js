
export default function SettingBoard() {

    return (
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-4xl dark:text-white">Account Setting</h1>
            <hr />
            <h2 className="mt-10 text-2xl">Profile Picture </h2>
           
            <div class="flex flex-wrap justify-start w-full my-10">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-72 h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <div class="mb-2 text-sm text-gray-500 dark:text-gray-400"><p class="font-semibold">Click to upload</p> or drag and drop</div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>

            <hr />
            <form>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div>
                        <div className="mt-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required />
                        </div>
                        
                        <div className="mt-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Given Name</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="given name" required />
                        </div>
                        <div className="mt-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                            <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="*******" required />
                        </div>

                    </div>

                    <div>
                    <div className="mt-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gmail</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="given name" required />
                        </div>
                        <div className="mt-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family Name</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="given name" required />
                        </div>
                       
                        <div className="mt-5">
                            <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="*******" required />
                        </div>
                       
                        
                    </div>

                </div>
            </form>

            <div className="inline gap-10 "> 
            <button type="submit" class="text-white bg-red-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-50 ">Update Profile</button>
            <button type="submit" class="text-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium underline rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">Reset</button>
            </div>
        </div>
    )
}