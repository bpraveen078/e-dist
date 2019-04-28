import * as React from "react";

export interface ILoginPageProps {
  error: string;
  loaded: boolean;
  loading: boolean;
}
export interface ILoginPageState {
  isLoading: boolean;
}
class Login extends React.Component<ILoginPageProps, ILoginPageState> {
  public render() {
    return (
      <div>
        <div>dfdfr</div>
      </div>
    );
  }
}

export default Login;
