import ToolsItem from "./ToolsItem";

const tools = [
  { logoPath: "Figma-logo.png", title: "Figma", body: "UI Design" },
  { logoPath: "Protopie-logo.png", title: "Protopie", body: "Prototyping" },
  {
    logoPath: "Illustrator-logo.png",
    title: "Adobe Illustrator",
    body: "Illustration",
  },
  {
    logoPath: "Photoshop-logo.png",
    title: "Adobe Photoshop",
    body: "Graphic Design",
  },
  {
    logoPath: "Maze-logo.png",
    title: "Maze Design",
    body: "Usability Testing",
  },
];

function Tools() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 mx-auto mb-12 lg:w-[1164px]">
      <h1 className="text-h1 font-bold">Title</h1>
      <div className="flex justify-center items-center content-center gap-9 self-stretch flex-wrap">
        {tools.map((tool) => (
          <ToolsItem
            title={tool.title}
            body={tool.body}
            logoPath={tool.logoPath}
          ></ToolsItem>
        ))}
      </div>
    </section>
  );
}

export default Tools;
