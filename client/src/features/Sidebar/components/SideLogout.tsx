import { SpinnerBtn } from "@/components/components";
import { useLogout } from "@/hooks/hooks";
import { LogOut } from "lucide-react";
import { FC } from "react";

type PropsType = {
  handleSideClick: () => void;
};

const SideLogout: FC<PropsType> = ({ handleSideClick }) => {
  const { handleCLick, isLoading } = useLogout();

  return isLoading ? (
    <div className="flex justify-start mt-6">
      <SpinnerBtn />
    </div>
  ) : (
    <button
      onClick={() => handleCLick(handleSideClick)}
      className="w-fit flex justify-start gap-5 group el__after_below items-center"
    >
      <LogOut className="icon__md icon__with_txt" />
      <span className="txt__2 el__flow group-hover:text-blue-600">Logout</span>
    </button>
  );
};
export default SideLogout;
