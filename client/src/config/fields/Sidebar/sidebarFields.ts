import { GoHome } from "react-icons/go";
import { FaBook, FaKey, FaRegCheckCircle } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { v4 } from "uuid";
import { MdLogin } from "react-icons/md";
import { LuUserPen } from "react-icons/lu";
import { RiAccountBoxLine } from "react-icons/ri";
import { LabelDropType } from "../../../types/generalFields";

export type SideFieldType = {
  id: string;
  label: string;
  path: string;
  icon: IconType;
};

export const sideFieldsAllUsers: SideFieldType[] = [
  {
    label: "Home",
    path: "/",
    icon: GoHome,
  },
  {
    label: "Books",
    path: "to-do",
    icon: FaBook,
  },
].map((el) => ({
  ...el,
  id: v4(),
}));

export const sideFieldsNonLogged: SideFieldType[] = [
  {
    label: "Register",
    path: "/auth/register",
    icon: LuUserPen,
  },
  {
    label: "Login",
    path: "to-do",
    icon: MdLogin,
  },
  {
    label: "Verify email",
    path: "to-do",
    icon: FaRegCheckCircle,
  },
  {
    label: "Recover account",
    path: "to-do",
    icon: FaKey,
  },
].map((el) => ({
  ...el,
  id: v4(),
}));

export const fieldAccountNonLogged: LabelDropType = {
  label: "Account",
  icon: RiAccountBoxLine,
};
