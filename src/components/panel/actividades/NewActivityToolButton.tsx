import { IconType } from "react-icons/lib";

interface IProps {
  label: string;
  Icon: IconType;
}

const NewActivityToolButton = ({ label, Icon }: IProps) => {
  return (
    <button
      type="button"
      className="flex flex-col items-center rounded-md px-2 py-1 transition-all hover:bg-cens-light/10"
    >
      <Icon className="text-3xl" />
      <p className="text-xs">{label}</p>
    </button>
  );
};

export default NewActivityToolButton;
