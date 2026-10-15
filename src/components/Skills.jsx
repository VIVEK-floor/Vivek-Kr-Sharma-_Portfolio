import React from "react";

const groups = [
  ["Frontend", ["React.js", "HTML5", "CSS3", "JavaScript (ES6)", "AJAX", "WordPress"]],
  ["Backend", ["Node.js", "Express.js", "PHP", "Laravel", "RESTful API Development", "Authentication & Authorization"]],
  ["Databases", ["MongoDB", "MySQL", "Database Design & Management"]],
  ["Tools", ["Git", "VS Code", "Postman"]],
  ["Also exploring", ["Python", "Machine Learning", "OpenCV", "Flask", "Data Visualization", "AI-Assisted Development"]],
];

export default function Skills() {
  return (
    <section name="Skills" className="sec">
      <div className="wrap">
        <h2 className="h2">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map(([title, items], i) => (
            <div key={title} className={"panel " + (i === 4 ? "md:col-span-2" : "")}>
              <h3 className="mb-4 font-display text-xl font-extrabold text-mint">{title}</h3>
              <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className="chip">{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
