import { withStyles } from "@material-ui/core";
import React, { ComponentType } from "react";
import { IThemeModel } from "../theme/theme";
import { IPropsContextModel, PropsContext } from "./propsContext";

const styles = (theme: IThemeModel) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.palette.common.darkWhite,
    color: theme.palette.common.lightBlack,
    display: "flex",
    flexDirection: "row",
    height: theme.typography.pxToRem(70),
    justifyContent: "center"
  }
});

// @ts-ignore
export const Warning = withStyles(styles)((props: any) => {
  const { contract, classes, name } = props;

  return (
    <div className={classes.container}>
      <span>Missing Prop Container for {contract}</span>
    </div>
  );
});

export const withProps = (
  contract: keyof IPropsContextModel,
  instanceName?: string
) => (WrappedComponent: React.ComponentType<any>) => (props: any) => (
  // @ts-ignore
  <PropsContext.Consumer>
    {(context: IPropsContextModel) => {
      let Hoc = context[contract] as React.ComponentType;
      const coalescedInstanceName = props.instanceName || instanceName;
      if (coalescedInstanceName) {
        const lookup = Hoc as any;
        Hoc = lookup[coalescedInstanceName] as React.ComponentType;
      }
      if (!Hoc) {
        return <Warning contract={contract} name={name} />;
      }

      return (
        <Hoc {...props}>
          <WrappedComponent {...props} />
        </Hoc>
      );
    }}
  </PropsContext.Consumer>
);
