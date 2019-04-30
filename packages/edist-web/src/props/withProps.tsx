// import { withStyles } from "@material-ui/core";
// import * as React from "react";
// import { IThemeModel } from "../theme/theme";
// import { IPropsContextModel, PropsContext } from "./propsContext";

// const styles = (theme: IThemeModel) => ({
//   container: {
//     alignItems: "center",
//     backgroundColor: theme.palette.common.darkWhite,
//     color: theme.palette.common.lightBlack,
//     display: "flex",
//     flexDirection: "row",
//     height: "",
//     justifyContent: "center"
//   }
// });

// // @ts-ignore
// export const Warning = withStyles(styles)((props: any) => {
//   const { contract, classes, name } = props;
//   debugger;
//   return (
//     <div className={classes.container}>
//       <span>Missing Prop Container for {contract}</span>
//     </div>
//   );
// });

// export const withProps = (
//   contract: keyof IPropsContextModel,
//   instanceName?: string
// ) => (WrappedComponent: React.ComponentType<any>) => (props: any) => (
//   // @ts-ignore
//   <PropsContext.Consumer>
//     {(context: IPropsContextModel) => {
//       debugger;
//       let Hoc = context[contract] as React.ComponentType;
//       const coalescedInstanceName = props.instanceName || instanceName;
//       if (coalescedInstanceName) {
//         const lookup = Hoc as any;
//         Hoc = lookup[coalescedInstanceName] as React.ComponentType;
//       }
//       if (!Hoc) {
//         debugger;
//         return <Warning contract={contract} name={name} />;
//       }

//       return (
//         <Hoc {...props}>
//           <WrappedComponent {...props} />
//         </Hoc>
//       );
//     }}
//   </PropsContext.Consumer>
// );
