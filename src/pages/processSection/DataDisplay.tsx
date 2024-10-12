import React from "react";

interface DataDisplayProps {
  pathImg: string;
  title: string;
  purpose: string;
  activities: string;
  outcome: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({
  pathImg,
  title,
  purpose,
  activities,
  outcome,
}) => {
  return (
    <div className="flex flex-col items-center self-stretch bg-glass-bg rounded-2xl border border-solid border-[#989FE0] p-4 backdrop-blur-12">
      <img
        src={`/process/${pathImg}`}
        alt={`${title} process`}
        className="w-[632px] h-[389px] object-cover"
      />
      <div className="flex flex-col p-4 items-center gap-4 self-stretch rounded-lg w-full">
        <h3 className="text-h3 text-content font-bold">{title}</h3>
        {[purpose, activities, outcome].map((text, index) => (
          <p key={index} className="text-body text-content">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
