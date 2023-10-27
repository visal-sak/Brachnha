"use client";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./classcards.module.css"
import Link from "next/link";
import { useGetRequestGameGradesQuery } from "../../store/features/grade/requestGradeApi";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "src/store/features/user/userApiSlice";
import { setCurrentUser } from "src/store/features/auth/authSlice";


const ClassCards = () => {


  const {data:grades,isLoading,error}=useGetRequestGameGradesQuery()


  const [id, setId] = useState(0);
  const {
    data: user,
    isSuccess,
    isError,
  } = useGetUserQuery();
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(user));
    }
  }, []);
  useEffect(() => {
    setId(user?.data?.id);
    [];
  });



  const includeClass = classNames(
    "absolute right-full md:right3/4 top-12 md:top-10 bottom-9 md:bottom-12 w-12 md:w-20 lg:w-24 xl:w-30 hover:scale-125 transition-all duration-500 cursor-pointer",
    styles.animationFly
  );
  const FairyClass = classNames(
    "absolute right-full top-2/3 left-[270px] w-12 md:w-20 lg:w-24 xl:w-30 hover:scale-125 transition-all duration-500 cursor-pointer  ",
    styles.animationFly
  );
  const FairyClasses = classNames(
    "absolute left-[270px] md:right3/4 top-12 md:top-10 bottom-9 md:bottom-12 w-12 md:w-20 lg:w-24 xl:w-30 hover:scale-125 transition-all duration-500 cursor-pointer",
    styles.animation
  );
  const BeeClass = classNames(
    "absolute left-28 md:right3/4 -top-[30px] md:-top-10 bottom-9 md:bottom-12 w-14 md:w-20 lg:w-24 xl:w-30 xl:botto-0 xl:-top-[57px] xl:left-28 hover:scale-125 transition-all duration-500 cursor-pointer",
    styles.bounce
  );
  const Box = classNames(
    "w-72 lg:w-72 lg:h-96 bg-fuchsia-300 px-6 pt-6 pb-2 rounded-xl shadow-0 transform hover:scale-105 transition duration-500 border-fuchsia-500 border-2 my-10 m-3",
    styles.borderbox
  );

  if (isLoading) {
    return (
      <div className="flex justify-end  w-full">
      <div class=" animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    );
  }
  localStorage.setItem("grade", "1");
  const handleChangeGrade = (newGrade) => {
    localStorage.setItem("grade", newGrade);
  };

  return (
    <>
      {grades.data.map((grade, index) => (
        <article key={index} class={Box}>
          <img
            src="../../../images/Fairy.png"
            alt="flowers"
            className={includeClass}
          />
          <img
            src="../../../images/flyTink.png"
            alt="flowers"
            className={FairyClasses}
          />
          <img
            src="../../../images/bee.png"
            alt="flowers"
            className={BeeClass}
          />
          <h1 class="mb-3 text-3xl font-bold text-gray-950">{grade.title}</h1>
          <h5 class="mt-4 text-gray-800 text-md font-medium cursor-pointer py-7">
            {grade.description}
          </h5>
          <section class="my-4 mb-2 border-t-2 border-gray-900">
            {grade.gameGrades.map((subjects) => (
              <section class="flex space-x-1 items-center font-medium justify-between py-4">
                <section>
                  <h3>{subjects.subject}</h3>
                </section>
                <Link
                  onClick={() => handleChangeGrade(index + 1)}
                  href={`/typegame/${subjects.route}`}
                >
                  <p
                    className="hover:underline
              inline-block 
              hover:duration-300 "
                  >
                    {" "}
                    {subjects.games[0]} ហ្គេម
                  </p>
                </Link>
              </section>
            ))}
            <img
              src="../../../images/rose.png"
              alt="flowers"
              className={FairyClass}
            />
            <img
              src="../../../images/Grass.png"
              alt="flowers"
              className="absolute w-10 lg:w-16 right-full top-3/4 bottom-20 animate-pulse hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </section>
        </article>
      ))}
    </>
  );
};
export default ClassCards;