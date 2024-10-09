import Picture from "./Picture";
import Skills from "./Skills";

function About() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 mx-auto mb-12 lg:w-[1164px]">
      <h1 className="text-h1 font-bold">About Me</h1>
      <div className="body flex gap-9">
        <Picture />
        <div className="w-full">
          <p className="text-body">
            Hi, I’m{" "}
            <span className="font-bold">William Arkananta Radisyandana</span>, a
            passionate <span className="font-bold">UI/UX Designer</span> with a
            strong focus on creating user-centered interfaces for both web and
            mobile applications. My work spans the end-to-end design process,
            from conducting user research and competitor analysis to developing
            wireframes, prototypes, and maintaining design systems. I am driven
            by a <span className="font-bold">Human-Centered Design</span>{" "}
            approach, ensuring that each product I design offers seamless
            experiences and meets user needs while supporting business
            objectives.
          </p>
          <br />
          <p className="text-body whitespace-normal">
            I thrive in collaborative environments, working alongside{" "}
            <span className="font-bold">cross-functional</span> teams to deliver
            impactful digital products. Proficient in tools like{" "}
            <span className="font-bold">Figma</span>, I excel at solving complex
            design challenges with creativity and precision, always aiming to
            create visually appealing yet highly functional{" "}
            <span className="font-bold">user experiences</span>.
          </p>
          <br />
          <p className="text-body whitespace-normal">
            When I’m not designing, I enjoy keeping up with the latest tech
            trends, exploring new investment strategies, and working on side
            projects that fuel my creativity.
          </p>
          <br />
          <p className="text-body whitespace-normal">
            Feel free to explore my portfolio for a closer look at my projects,
            and don’t hesitate to get in touch if you'd like to collaborate!
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
}

export default About;
