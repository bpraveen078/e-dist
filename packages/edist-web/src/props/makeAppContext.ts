import * as React from "react";
import { LoginPageAppContainer } from "../pages/common/login.page.container";
import { IPropsContextModel } from "./propsContext";

export const makeAppContext: () => IPropsContextModel = () => {
  debugger;
  return {
    LoginProps: LoginPageAppContainer
  };
};
