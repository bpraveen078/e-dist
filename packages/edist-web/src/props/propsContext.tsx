import * as React from "react";

export interface IPropsContextModel {
  LoginProps: React.ComponentType<any>;
}
export const PropsContext = React.createContext({});
