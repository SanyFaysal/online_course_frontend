"use client";

//@ts-ignore
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import store from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;
