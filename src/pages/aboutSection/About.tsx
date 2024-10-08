const skills: String[] = [
  "UI/UX Design",
  "Product Design",
  "Web Design",
  "Mobile Design",
  "Figma",
  "Wireframing & Prototyping",
  "User Research & Testing",
];

function About() {
  return (
    <section className="flex flex-col justify-center items-center mt-12 gap-8 w-9/12 m-auto">
      <h1 className="text-h1 font-bold">About Me</h1>
      <div className="body">
        <p className="text-body">
          Hi, I’m{" "}
          <span className="font-bold">William Arkananta Radisyandana</span>, a
          passionate <span className="font-bold">UI/UX Designer </span>
          with a strong focus on creating user-centered interfaces for both web
          and mobile applications. My work spans the end-to-end design process,
          from conducting user research and competitor analysis to developing
          wireframes, prototypes, and maintaining design systems. I am driven by
          a <span className="font-bold">Human-Centered Design</span> approach,
          ensuring that each product I design offers seamless experiences and
          meets user needs while supporting business objectives.
        </p>
        <br />
        <p className="text-body">
          I thrive in collaborative environments, working alongside{" "}
          <span className="font-bold">cross-functional </span>
          teams to deliver impactful digital products. Proficient in tools like{" "}
          <span className="font-bold">Figma</span>, I excel at solving complex
          design challenges with creativity and precision, always aiming to
          create visually appealing yet highly functional{" "}
          <span className="font-bold">user experiences</span>.
        </p>
        <br />
        <p className="text-body">
          When I’m not designing, I enjoy keeping up with the latest tech
          trends, exploring new investment strategies, and working on side
          projects that fuel my creativity.
        </p>
        <br />
        <p className="text-body">
          Feel free to explore my portfolio for a closer look at my projects,
          and don’t hesitate to get in touch if you'd like to collaborate!
        </p>
      </div>
      <div className="overflow-hidden size-full">
        <div className="flex rounded-2xl bg-linear-main py-4 px-6 items-center gap-9 animate-infinite-scroll">
          {skills.map((skill, index) => (
            <h2
              key={index}
              className="flex gap-9 text-nowrap items-center text-h3 text-background font-bold"
            >
              {skill}
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
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
