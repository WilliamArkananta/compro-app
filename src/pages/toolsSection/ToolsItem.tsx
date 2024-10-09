interface Props {
  logoPath: string;
  title: string;
  body: string;
}
function ToolsItem({ logoPath, title, body }: Props) {
  return (
    <div className="flex p-6 items-center gap-6 w-[546px] bg-glass-bg rounded-2xl border border-solid border-[#989FE0] backdrop-blur-12">
      <div className="flex w-[100px] h-[100px] justify-center items-center">
        <img src={`../../../public/logo/${logoPath}`} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-h3 text-content font-medium">{title}</h3>
        <p className="text-body text-content">{body}</p>
      </div>
    </div>
  );
}

export default ToolsItem;
