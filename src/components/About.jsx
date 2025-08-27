import React from "react";
// If you add a photo to /src/assets, uncomment the import and use src={myPhoto}
import myPhoto from "../assets/profiletest.jpg";

function About() {
  return (
    <div>
      <section id="about" className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          {/* Photo */}
          <div className="flex justify-center md:col-span-1">
            {/* If image is in /public, keep src="/my-photo.jpg".
               If you import it, replace src with src={myPhoto} */}
            <img
              src={myPhoto}
              alt="My face here"
              width="220"
              height="220"
              className="h-56 w-56 rounded-full object-cover shadow-md ring-1 ring-black/5"
            />
          </div>

          {/* Text content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              About Me
            </h2>

            <p className="mt-3 text-lg leading-7 text-slate-600 dark:text-slate-800">
              I'm a web developer focused on building clean, responsive apps
              with React, Node.js, and PostgreSQL. I enjoy turning ideas into
              real, usable products.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4 flex justify-center">
              <span className="badge bg-primary">React</span>
              <span className="badge bg-secondary">Node</span>
              <span className="badge bg-dark">PostgreSQL</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 flex justify-center">
              <a
                href="Martin_Castellanos_Tech_Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-900"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
