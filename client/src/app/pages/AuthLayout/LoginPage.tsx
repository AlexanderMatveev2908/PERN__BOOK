import { FC } from "react";
import { useScroll } from "../../../hooks/useScroll";
import Login from "../../../features/AuthLayout/Login/Login";
import WrapperAuthPage from "../../../components/common/WrapperAuthPage";

const LoginPage: FC = () => {
  useScroll();

  return (
    <WrapperAuthPage {...{ title: "LOGIN" }}>
      <Login />
    </WrapperAuthPage>
  );
};
export default LoginPage;
