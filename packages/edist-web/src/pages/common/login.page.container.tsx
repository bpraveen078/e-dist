// @ts-ignore
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ILoginPageProps } from "./login.page";

export interface ILoginPageContainerProps {
  history?: any;
  match?: any;
  dispatch?: (action: any) => void;
}

const mapStateToProps = (state: any) => {
  debugger;
  const loading = state.benefitsInfo.get("loading");
  const loaded = state.benefitsInfo.get("loaded");
  const error = state.benefitsInfo.get("error");

  return { loading };
};
const mapDispatchToProps = (dispatch: any) => ({
  loginSubmit: () => dispatch({ type: "" })
});
// @ts-ignore
@withRouter
// @ts-ignore
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class LoginPageAppContainer extends React.Component<
  ILoginPageContainerProps
> {
  public static defaultProps = {};
  constructor(props: any) {
    super(props);
    debugger;
  }

  public render() {
    debugger;
    return React.cloneElement(
      this.props.children as React.ReactElement<ILoginPageProps>,
      {}
    );
  }
}
