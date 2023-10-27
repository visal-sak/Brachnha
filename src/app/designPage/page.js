import React from 'react'

export default function DesignPage() {
  return (
    <article>
      <section className="flex-wrap flex items-center justify-evenly p-2">
        <article className="w-full md:mx-auto max-h-screen grid grid-cols-1 p-4 my-10 mx-10">
          <div class="incol my-0 lg:my-20">
            <h6>ត្រូវបានទទួលស្គាល់ដោយប្រាជ្ញា</h6>
          </div>
        </article>
      </section>
      <img
        src="../../../images/Kid Garden.png"
        alt="land"
        className="bg-cover bg-no-repeat w-full h-full "
      />
    </article>
  );
}
