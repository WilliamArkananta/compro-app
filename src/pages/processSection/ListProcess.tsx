import { useState } from "react";
import ListItem from "./ListItem";
import DataDisplay from "./DataDisplay";

interface DataItem {
  pathImg: string;
  title: string;
  purpose: string;
  activities: string;
  outcome: string;
}

function ListProcess() {
  const [activeButton, setActiveButton] = useState<number>(0);

  const labelButton = ["Research", "Ideation", "Prototyping", "Testing"];
  const data: DataItem[] = [
    {
      pathImg: "Research.png",
      title: "Research",
      purpose:
        "This step is to gather insights about the users, their behaviors, and the problem you’re solving.",
      activities:
        "By conducting user research (surveys, interviews, or secondary research), analyzing competitor products, studying market trends, and understanding the target audience’s needs.",
      outcome:
        "We can get a clear understanding of user pain points, motivations, and goals. You’ll define key user personas or scenarios to guide your design.",
    },
    {
      pathImg: "Ideation.png",
      title: "Ideation",
      purpose:
        "This step is to generate and explore multiple ideas for solving the identified problems.",
      activities:
        "By brainstorming creative solutions, sketching wireframes, and considering different interaction models. This is where you start developing design concepts based on the research insights.",
      outcome:
        "We can get a low-fidelity wireframes or sketches that outline the structure and flow of the interface. Multiple design directions are explored before moving forward.",
    },
    {
      pathImg: "Prototyping.png",
      title: "Prototyping",
      purpose:
        "This step is to create interactive versions of your design that allow for early testing and feedback.",
      activities:
        "By using tools like Figma or Protopie, you build mid-to-high fidelity interactive prototypes that simulate real-world use. These prototypes allow stakeholders and users to experience the design and understand how it works before development.",
      outcome:
        "We can get a working prototype that showcases the key interactions, visual design, and usability of the product.",
    },
    {
      pathImg: "Testing.png",
      title: "Testing",
      purpose:
        "This step is to validate your design with real users and gather feedback to improve it.",
      activities:
        "By running usability tests (either in-person or remote), analyzing user interactions with the prototype, and identifying pain points or confusing areas. Testing might also involve A/B testing for different design variations.",
      outcome:
        "We can get an actionable insights that help you refine the design. The goal is to ensure the design is intuitive, efficient, and solves user problems effectively.",
    },
  ];

  return (
    <div className="flex justify-between items-center flex-1 self-stretch gap-4">
      <div className="flex flex-col justify-between w-[464px] self-stretch">
        {labelButton.map((label, index) => (
          <ListItem
            key={index}
            label={label}
            isActive={activeButton === index}
            onClick={() => setActiveButton(index)}
          />
        ))}
      </div>
      <DataDisplay {...data[activeButton]} />
    </div>
  );
}

export default ListProcess;
