"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetRequestSubjectsQuery,
} from "../../store/features/subject/requestSubjectApi";
import {
  useGetRequestGradesQuery,
} from "../../store/features/grade/requestGradeApi";
import {
  useGetRequestGameTypesQuery,
} from "../../store/features/gameType/requestGameTypeApi";
import SubjectForm from "./SubjectForm";
import GameTypeForm from "./GameTypeForm";
import GradeForm from "./GradeForm";


export default function ClassList() {

    const {
      data: subjects,
      isLoading: isLoadingSubject,
      error: errorSubject,
    } = useGetRequestSubjectsQuery();
    const {
      data: gametypes,
      isLoading: isLoadingGameType,
      error: errorGameType,
    } = useGetRequestGameTypesQuery();
    const {
      data: grades,
      isLoading: isLoadingGrade,
      error: errorGrdae,
    } = useGetRequestGradesQuery();

  return (
    <div className="grid grid-cols-3 gap-5 ">
      <div class="w-96 p-6 bg-cyan-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>

        <a href="#">
          <h5 class="my-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            ថ្នាក់សរុបទាំងអស់
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {grades && grades.data ? grades.data.length : 0}
        </p>
        <div className="float-right">
          <GradeForm />
        </div>
      </div>

      <div class="w-96 p-6 bg-purple-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>

        <a href="#">
          <h5 class="my-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
           មុខវិជ្ជាសរុបទាំងអស់
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {" "}
          {subjects && subjects.data ? subjects.data.length : 0}
        </p>
        <div className="float-right">
          <SubjectForm />
        </div>
      </div>

      <div class="w-96 p-6 bg-teal-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
          />
        </svg>

        <a href="#">
          <h5 class=" my-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            ប្រភេទហ្គេមសរុបទាំងអស់
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {" "}
          {gametypes && gametypes.data ? gametypes.data.length : 0}
        </p>
        <div className="float-right">
          <GameTypeForm />
        </div>
      </div>
    </div>
  );
}
