import React from 'react'

export default function VideoPage() {
  return (
    <article className="py-20 bg-song">
      <h1 className="tracking-tight mb-10 text-center font-extrabold text-3xl bg-gradient-to-r from-fuchsia-800 via-pink-400 to-yellow-500 text-transparent bg-clip-text animate-gradient m-4">
        {" "}
        វីដេអូសម្រាប់កុមារ
      </h1>
      <div className="flex flex-cols  justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-8 xl:grid-cols-2 xl:gap-20">
          <iframe
            className="  w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl "
            src="https://www.youtube.com/embed/DR-cfDsHCGA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="  w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl "
            src="https://www.youtube.com/embed/I_3mbra4dHU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="  w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl "
            src="https://www.youtube.com/embed/pZw9veQ76fo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>{" "}
          <iframe
            className="w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl"
            src="https://www.youtube.com/embed/hq3yfQnllfQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl "
            src="https://www.youtube.com/embed/cR-Qr1V8e_w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl "
            src="https://www.youtube.com/embed/D0Ajq682yrA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl "
            src="https://www.youtube.com/embed/By2hmo323xM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-[300px] h-[200px] xl:w-[560px] xl:h-[300px] border-4 borderbox rounded-xl"
            src="https://www.youtube.com/embed/UxWdY3ghiis"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </article>
  );
}
