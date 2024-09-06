import { IconType } from "react-icons/lib";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  Icon: IconType;
}

const NewActivityToolButton = ({ label, Icon, ...props }: IProps) => {
  return (
    <button
      type="button"
      className="flex flex-col items-center rounded-md px-2 py-1 transition-all hover:bg-cens-light/10"
      {...props}
    >
      <Icon className="text-3xl" />
      <p className="text-xs">{label}</p>
    </button>
  );
};

export default NewActivityToolButton;
