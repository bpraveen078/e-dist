import * as React from "react";
import Button from "@material-ui/core/Button";
import TextInput from "src/elements/text-input";

export interface ILoginPageProps {
  error: string;
  loaded: boolean;
  loading: boolean;
}
export interface ILoginPageState {
  isLoading: boolean;
  login: {
    userName: string;
    password: string;
  };
}
class Login extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      login: {
        userName: "",
        password: ""
      }
    };
  }
  public handleSubmit = (e: any) => {
    console.log(e);
  };
  public handleChange = (e: any) => {
    const { login } = this.state;
    const { name, value } = e.target;

    this.setState({
      login: {
        ...login,
        [name]: value
      }
    });
  };
  public render() {
    const { userName, password } = this.state.login;
    return (
      <div style={{ marginTop: "155px" }}>
        Login
        <form name="loginForm" onSubmit={this.handleSubmit}>
          <TextInput
            onChange={this.handleChange}
            value={userName}
            required={true}
            minLength={4}
            label="User Name"
            name="userName"
            placeholder="User Name"
            maxLength={20}
          />
          <br />
          <TextInput
            onChange={this.handleChange}
            value={password}
            required={true}
            minLength={4}
            label="Password"
            name="password"
            placeholder="Password"
            maxLength={10}
          />
          <br />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
