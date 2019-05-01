// @ts-ignore
import * as actions from "edist-core/lib/redux-modules/userinfo/actions";
import * as React from "react";

export const mapStateToProps = (state: any) => {
  return { state };
};
export const mapDispatchToProps = (dispatch: any) => ({
  drawerOpen: (isMenuOpen: boolean) =>
    dispatch({ isMenuOpen, type: actions.LOGIN_REQUEST })
});
