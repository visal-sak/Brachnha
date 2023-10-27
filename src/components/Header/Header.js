"use cilent";

import React from "react";
import styles from "./header.module.css";
import classNames from "classnames";
import Lottie from "lottie-react";
import animationData from "../../app/utils/assets/bookboy.json";
import DragonAnim from "../../app/utils/assets/dragon.json";
import DinoAim from "../../app/utils/assets/stu.json";
import BookAim from "../../app/utils/assets/book.json";
import KidAim from "../../app/utils/assets/rabbitss.json";
import GirlAim from "../../app/utils/assets/babygirl.json";
import RainbowAim from "../../app/utils/assets/rainbow.json";
import animationDataBoy from "../../app/utils/assets/boy.json";
import animationDataFly from "../../app/utils/assets/fly.json";
import animationDataFlyKiki from "../../app/utils/assets/kiki.json";
import GirlAims from "../../app/utils/assets/girls.json";
import Pokemon from "../../app/utils/assets/cute.json";
import Witch from "../../app/utils/assets/witch.json";
import Boy from "../../app/utils/assets/blackboy.json";

export default function Header() {
  const ClassInclude = classNames(
    "text-lg lg:text-lg lg:text-center  tracking-tight text-black md:text-lg p-8",
    styles.slide
  );
  return (
    <header class="flex min-h-full m-5 py-28">
      <main class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
        <article class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
          <section class="mb-16 lg:my-auto lg:max-w-lg">
            <section class="mb-6 max-w-xl">
              <img
                src="../../../images/cloud.png"
                alt="cloud"
                className="bottom-full absolute right-full animate-pulse mb-9 w-16 md:w-20 lg:w-24 xl:w-28"
              />
              <img
                src="../../../images/cloud.png"
                alt="cloud"
                className="bottom-full absolute left-1/3 animate-pulse mb-9 w-16 md:w-20 lg:w-24 xl:w-28"
              />
              <img
                src="../../../images/cloud.png"
                alt="cloud"
                className="bottom-full absolute left-70 animate-pulse mb-8 w-16 md:w-20 lg:w-25 xl:w-28"
              />
              <Lottie
                animationData={animationDataFly}
                className="top-1 -left-40 absolute bottom-2 w-10 md:w-20 lg:w-16 xl:w-36 xl:mb-72"
              />
              <Lottie
                animationData={RainbowAim}
                className="w-28 md:w-36 lg:w-36 xl:w-52"
              />
              <Lottie
                animationData={animationDataFlyKiki}
                className="top-2 mb-[800px] md:top-4 md:right-72 md:bottom-0 left-36 xl:top-3 xl:left-56 absolute bottom-2 w-20 md:w-20 lg:w-16 xl:w-36 xl:mb-80 slide"
              />
              <Lottie
                animationData={Witch}
                className="w-0 md:w-28 lg:w-32 xl:w-0 absolute md:left-40 md:top-2"
              />
              <Lottie
                animationData={Boy}
                className="w-0 md:w-24 lg:w-28 xl:w-0 absolute md:left-80 md:top-40"
              />
              <Lottie
                animationData={DragonAnim}
                className="absolute  top-1 ml-10 md:right-72 md:top-4 xl:left-96 mb-96 w-28 -right-0.5 md:w-36 lg:w-44 xl:w-52"
              />
              <div className={styles.text}>
                <div>ប្រា</div>
                <div>ជ្ញា</div>
              </div>
              <Lottie
                animationData={animationDataBoy}
                className="top-1 mb-[580px] left-[285px] xl:top-10 xl:left-56 xl:mr-52 absolute bottom-2 w-20 w-22 md:w-40 md:top-1 lg:w-16 xl:w-[120px] xl:mb-0"
              />
              <Lottie
                animationData={GirlAim}
                className="top-2 mb-56 right-80 -left-7 md:left-[0.4px] md:top-96 lg:-left-20 lg:-bottom-28 lg:top-10 xl:-left-36 xl:mb-0 xl:right-0 xl:top-20 xl:bottom-0 absolute bottom-24 w-24 md:w-32 lg:w-28 xl:w-36"
              />
              <Lottie
                animationData={Pokemon}
                alt="lora"
                className="-top-40 left-28 xl:top-72 xl:-left-48 md:-left-24 md:top-80 absolute bottom-2 w-28 md:w-52 lg:w-48 lg:-left-36 lg:top-56 xl:w-96 "
              />
              <Lottie
                animationData={BookAim}
                className="top-28 -left-3 mr-6 absolute bottom-30 w-[100px] md:w-24 lg:-w-36 xl:w-44 md:my-2 md:top-36 md:right-96 lg:left-60 md:mt-2 lg:top-40 xl:top-36 xl:right-2/3 xl:ml-24 xl:bottom-32 2xl:w-52 2xl:top-40 2xl:right-96"
              />
              <p className={ClassInclude}>
                តោះលេងនូវហ្គេមសម្បូរបែបជាមួយនឹងប្រាជា្ញ​
                ដើម្បីទទួលបាននូវចំណេះដឹងប្រាជ្ញាការគិត
              </p>
              <Lottie
                animationData={DinoAim}
                className="w-16 my-10 md:w-20 lg:-w-28 xl:w-24 absolute right-3/4 top-[330px] md:top-96 lg:top-96 xl:top-96 xl:left-2 lg:my-6 xl:my-20"
              />
              <Lottie
                animationData={KidAim}
                className="w-20 my-8 md:w-24 lg:-w-28 xl:w-32 absolute left-56 top-[344px] md:top-96 lg:top-3/4 xl:top-96 xl:left-80 xl:my-14"
              />
              <Lottie
                animationData={GirlAims}
                alt="lora"
                className="-top-56 left-[239px] ml-3 md:top-64 md:left-[250px] md:my-10 md:right-36 xl:top-56 xl:left-80 absolute bottom-2 w-28 md:w-56 lg:w-56 lg:left-80 lg:top-56 xl:w-72"
              />
            </section>
          </section>
        </article>
        <section class="flex h-full w-full space-x-5 overflow-hidden md:justify-end">
          <section class="w-full flex-col space-y-4 py-20 lg:flex lg:w-80 md:w-56">
            <Lottie animationData={animationData} className="w-80" />
          </section>
        </section>
      </main>
    </header>
  );
}
