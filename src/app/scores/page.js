"use client";

import React,{useEffect} from "react";
import DataTable from "react-data-table-component";
import { useGetRequestScoreQuery } from "src/store/features/gameHistory/requestSubjectApi";
import { Howl } from "howler";

export default function ScorePage() {
       const { data: score } = useGetRequestScoreQuery();

            useEffect(() => {
              const sound = new Howl({
                src: ["/audio/SubSong.mp3"],
                loop: true,
                volume: 0.5,
              });

              sound.play();

              return () => {
                sound.unload();
              };
            }, []);
  return (
    <article className="py-20 bg-song">
      <h1 className="tracking-tight mb-10 text-center font-extrabold text-3xl bg-gradient-to-r from-fuchsia-800 via-pink-400 to-yellow-500 text-transparent bg-clip-text animate-gradient m-4">
        {" "}
        ចំណាត់ថ្នាក់ប្រចាំថ្ងៃ
      </h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 m-10">
        <div class="grid grid-cols-2 p-3 w-72 bg-fuchsia-100 mb-10 border-2 borderbox rounded-xl">
          <div>
            <div class="flex items-center justify-between mb-2 ">
              <div class="w-10 rounded-full">
                <img
                  src={
                    score && score.data && score.data[0].avatar
                      ? score.data[0].avatar
                      : "../../../images/profile.jpg"
                  }
                />
              </div>
            </div>
            <p class="mb-1 mt-2 xl:text-lg font-bold">
              <a href="#" class="hover:underline">
                {" "}
                {score && score.data && score.data[0].username
                  ? score.data[0].username
                  : "N/A"}
              </a>
            </p>
            <p class="mb-3 text-sm font-normal">
              <a href="#" class="hover:underline">
                {" "}
                ពិន្ទុ : {score && score.data && score.data[0].score}
              </a>
            </p>
          </div>
          <div className="ml-10 w-24">
            <img src="../../../images/rank1.png" />
          </div>
        </div>

        <div class="grid grid-cols-2 p-3 w-72 border-2 borderbox rounded-xl bg-fuchsia-100 mb-10">
          <div>
            <div class="flex items-center justify-between mb-2">
              <div class="w-10 rounded-full">
                <img
                  src={
                    score && score.data && score.data[1].avatar
                      ? score.data[1].avatar
                      : "../../../images/profile.jpg"
                  }
                />
              </div>
            </div>
            <p class="mb-1  xl:text-lg font-bold">
              <a href="#" class="hover:underline">
                {" "}
                {score && score.data && score.data[1].username
                  ? score.data[1].username
                  : "N/A"}
              </a>
            </p>
            <p class="mb-3 text-sm font-normal">
              <a href="#" class="hover:underline">
                {" "}
                ពិន្ទុ : {score && score.data && score.data[1].score}
              </a>
            </p>
          </div>
          <div className="ml-10 w-24">
            <img src="../../../images/rank2.png" />
          </div>
        </div>

        <div class="grid grid-cols-2 p-3 w-72 border-2 borderbox rounded-xl bg-fuchsia-100 mb-10">
          <div>
            <div class="flex items-center justify-between mb-2">
              <div class="w-10 rounded-full">
                <img
                  src={
                    score && score.data && score.data[2].avatar
                      ? score.data[2].avatar
                      : "../../../images/profile.jpg"
                  }
                />
              </div>
            </div>
            <p class="mb-1 xl:text-lg font-bold">
              <a href="#" class="hover:underline">
                {" "}
                {score && score.data && score.data[2].username
                  ? score.data[2].username
                  : "N/A"}
              </a>
            </p>
            <p class="mb-3 text-sm font-normal">
              <a href="#" class="hover:underline">
                {" "}
                ពិន្ទុ : {score && score.data && score.data[2].score}
              </a>
            </p>
          </div>
          <div className="ml-10 w-24">
            <img src="../../../images/rank3.png" />
          </div>
        </div>
      </div>
      <div class="overflow-x-auto h-96">
        <table class="table table-pin-rows">
          <thead>
            <tr>
              <th
                scope="col"
                style={{ fontSize: "18px", marginBottom: "10px" }}
              >
                ឈ្មោះ
              </th>
              <th scope="col" style={{ fontSize: "18px" }}>
                ចំណាត់ថ្នាក់
              </th>
              <th scope="col" style={{ fontSize: "18px" }}>
                ពិន្ទុ
              </th>
            </tr>
          </thead>
          <tbody>
            {score &&
              score.data.map((scores, index) => (
                <>
                  <tr key={index} className="table-secondary">
                    <td
                      style={{
                        fontSize: "17px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={scores?.avatar?scores?.avatar:"../../../images/profile.jpg"}
                        alt="pic"
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      {scores.username}
                    </td>
                    <td style={{ fontSize: "17px" }}>{index + 1}</td>
                    <td style={{ fontSize: "17px" }}>{scores.score}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
