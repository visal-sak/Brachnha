"use client";

import AllGameCardComponent from '../../components/AllGameCard/allGameCard';
import React,{useEffect} from 'react'
import { Howl, Howler } from "howler";

export default function AllGamePage() {
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
    <main className="py-20 bg-allGame">
      <h1 className="tracking-tight text-center font-extrabold text-fuchsia-900 text-2xl xl:text-4xl m-4">
        {" "}
        ប្រភេទហ្គេមទាំងអស់
      </h1>
      <section className="mx-auto flex max-h-screen overflow-x-auto h-96 items-center justify-around p-2 border-0 drop-shadow-sm ">
        <AllGameCardComponent />
      </section>
    </main>
  );
}
