"use client"

import { useDispatch } from "react-redux";
import { useGetRequestAllUsersQuery } from "src/store/features/admin/requestAdminApi";
import { useGetRequestScoreQuery } from "src/store/features/gameHistory/requestSubjectApi"


export default function ScoreData() {

  const {
    data: score
  } = useGetRequestScoreQuery();




  return (
    <div className="grid grid-cols-3">
   
      <div class="grid grid-cols-2 p-3 w-72 rounded-lg bg-white mb-10">
        <div>
          <div class="flex items-center justify-between mb-2 ">
            <div class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
              <img class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2"
                src={
                  score && score.data && score.data[0].avatar
                    ? score.data[0].avatar
                    : "../../../images/profile.jpg"
                }
              />
            </div>
          </div>
          <p class="mb-1 mt-2 text-sm font-normal">
            <a href="#" class="hover:underline">  @{score && score.data && score.data[0].username
              ? score.data[0].username
              : "N/A"}</a>
          </p>
          <p class="mb-3 text-sm font-normal">
            <a href="#" class="hover:underline">  score: {score && score.data && score.data[0].score}</a>
          </p>
        </div>
        <div className="ml-10 w-24">
          <img src="../../../images/rank1.png" />
        </div>
      </div>

      <div class="grid grid-cols-2 p-3 w-72 rounded-lg bg-white mb-10">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
              <img class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2"
                src={
                  score && score.data && score.data[1].avatar
                    ? score.data[1].avatar
                    : "../../../images/profile.jpg"
                }
              />
            </div>
          </div>
          <p class="mb-1 text-sm font-normal">
            <a href="#" class="hover:underline">  @{score && score.data && score.data[1].username
              ? score.data[1].username
              : "N/A"}</a>
          </p>
          <p class="mb-3 text-sm font-normal">
            <a href="#" class="hover:underline">  score: {score && score.data && score.data[1].score}</a>
          </p>
        </div>
        <div className="ml-10 w-24">
          <img src="../../../images/rank2.png" />
        </div>
      </div>

      <div class="grid grid-cols-2 p-3 w-72 rounded-lg bg-white mb-10">
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
              <img class="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2"
                src={
                  score && score.data && score.data[2].avatar
                    ? score.data[2].avatar
                    : "../../../images/profile.jpg"
                }
              />
            </div>
          </div>
          <p class="mb-1 text-sm font-normal">
            <a href="#" class="hover:underline">  @{score && score.data && score.data[2].username
              ? score.data[2].username
              : "N/A"}</a>
          </p>
          <p class="mb-3 text-sm font-normal">
            <a href="#" class="hover:underline">  score: {score && score.data && score.data[2].score}</a>
          </p>
        </div>
        <div className="ml-10 w-24">
          <img src="../../../images/rank3.png" />
        </div>
      </div>

    </div>
  )
}