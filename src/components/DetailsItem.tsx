export const DetailsItem = ({
  title,
  value = "",
}: {
  title: string;
  value: string | number | undefined | React.ReactNode;
}) => {
  return (
    <div className="w-full flex items-center">
      <h2 className="font-semibold w-[40%]  text-base">{title}</h2>
      <span>{value}</span>
    </div>
  );
};
