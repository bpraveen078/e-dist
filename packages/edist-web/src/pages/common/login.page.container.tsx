// @ts-ignore
import * as actions from "edist-core/lib/redux-modules/userinfo/actions";
import * as React from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { ILoginPageProps } from "./login.page";

// export interface ILoginPageContainerProps {
//   history?: any;
//   match?: any;
//   dispatch?: (action: any) => void;
//   load: boolean;
// }

export const mapStateToProps = (state: any) => {
  debugger;

  return { state };
};
export const mapDispatchToProps = (dispatch: any) => ({
  loginSubmit: (model: any) => dispatch({ model, type: actions.LOGIN_REQUEST })
});

// // @ts-ignore
// @withRouter
// // @ts-ignore
// @connect(
//   mapStateToProps,
//   mapDispatchToProps
// )
// export class LoginPageAppContainer extends React.PureComponent<
//   ILoginPageContainerProps
// > {
//   // public static defaultProps = {};
//   // constructor(props: any) {
//   //   super(props);
//   //   debugger;
//   // }

//   public render() {
//     debugger;
//     const { load } = this.props;
//     return React.cloneElement(
//       this.props.children as React.ReactElement<ILoginPageProps>,
//       {
//         load
//       }
//     );
//   }
// }
