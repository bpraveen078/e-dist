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
  const loading = state.benefitsInfo.get("loading");
  const loaded = state.benefitsInfo.get("loaded");
  const error = state.benefitsInfo.get("error");

  const props: ILoginPageProps = {
    error,
    loaded,
    loading
  };
  return props;
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchOrgChart: () => dispatch({ type: "" })
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
  }

  public componentDidMount() {
    const { dispatch } = this.props;
    if (!dispatch) {
      throw new Error("missing dispatch");
    }

    dispatch({
      type: ""
    });
  }
  public render() {
    const {} = this.props as ILoginPageProps;
    return React.cloneElement(
      this.props.children as React.ReactElement<ILoginPageProps>,
      {}
    );
  }
}
