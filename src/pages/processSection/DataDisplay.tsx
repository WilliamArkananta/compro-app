interface Props {
  pathImg: string;
  title: string;
  purpose: string;
  activities: string;
  outcome: string;
}

function DataDisplay({ pathImg, title, purpose, activities, outcome }: Props) {
  return (
    <div className="flex flex-col items-center self-stretch bg-glass-bg rounded-2xl border border-solid border-[#989FE0] p-4 backdrop-blur-12">
      <img src={`/process/${pathImg}`} alt="" className="w-[632px] h-[389px]" />
      <div className="flex flex-col p-4 items-center gap-4 self-stretch rounded-lg w-full">
        <h3 className="text-h3 text-content font-bold">{title}</h3>
        <p className="text-body text-content">{purpose}</p>
        <p className="text-body text-content">{activities}</p>
        <p className="text-body text-content">{outcome}</p>
      </div>
    </div>
  );
}

export default DataDisplay;
