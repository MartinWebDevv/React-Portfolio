import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        {/* Thumbnail placeholder */}
        <div className="h-56 w-full bg-slate-600 flex items-center justify-center text-slate-200">
          <span>{props.name}</span>
        </div>
        <div className="p-4">
          <p className="text-slate-700 dark:text-slate-600 mb-3 flex justify-center" >
            {props.desc}
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="rounded border border-slate-950 px-5 py-1.5 text-sm text-slate-950 dark:hover:bg-slate-500"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
