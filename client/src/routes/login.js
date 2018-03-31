import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import LostPassword from './login/LostPassword';

const styles = {
  grid: {
    height: '100%',
    width: '900px',
    margin: '0 auto'
  },
  box: {
    backgroundColor: 'white',
    border: '1px solid #e6e6e6',
    textAlign: 'center',
    marginBottom: '1em',
    padding: '1em'
  }
};

const Box = () => {
  return <div style={styles.box} />;
};

class Login extends React.Component {
  state = {
    showLogin: true,
    showRegister: false,
    showLostPassword: false
  };

  showRegister = ev => {
    ev.preventDefault();
    this.setState({
      showLogin: false,
      showRegister: true,
      showLostPassword: false
    });
  };

  showLogin = ev => {
    ev.preventDefault();
    this.setState({
      showLogin: true,
      showRegister: false,
      showLostPassword: false
    });
  };

  handleLogin = (ev, args) => {
    console.log(args);
  };

  render() {
    const { showLogin, showRegister, showLostPassword } = this.state;

    return (
      <Grid verticalAlign="middle" columns={2} centered style={styles.grid}>
        <Grid.Row>
          <Grid.Column>
            <Image src="images/phone.png" fluid />
          </Grid.Column>
          <Grid.Column>
            {showLogin && (
              <SignIn
                styles={styles}
                handleClick={this.showRegister}
                handleSubmit={this.handleLogin}
              />
            )}
            {showRegister && (
              <SignUp styles={styles} handleClick={this.showLogin} />
            )}
            {/* { showLostPassword && <LostPassword styles={styles} /> } */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;
