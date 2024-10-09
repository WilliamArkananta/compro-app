const skills: String[] = [
  "UI/UX Design",
  "Product Design",
  "Web Design",
  "Mobile Design",
  "Figma",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Testing",
];

function Skills() {
  return (
    <div className="logos w-full overflow-hidden bg-linear-main p-4 rounded-2xl">
      <ul className="logos-slide w-fit gap-9 flex whitespace-nowrap animate-infinite-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div className="img flex gap-9 items-center">
            <li
              key={index}
              className="text-h3 text-background font-bold text-center"
            >
              {skill}
            </li>
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0.5C13.5567 6.91523 18.5848 11.9433 25 13C18.5848 14.0567 13.5567 19.0848 12.5 25.5C11.4433 19.0848 6.41523 14.0567 0 13C6.41523 11.9433 11.4433 6.91523 12.5 0.5Z"
                fill="#F1F5F9"
              />
            </svg>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
