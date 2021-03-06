import React from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react';

export default ({ styles, handleClick }) => {
  return (
    <div>
      <div style={styles.box}>
        <img src="images/logo.png" />
        <h4>Regístrate para ver fotos y videos de tus amigos.</h4>
        <Button color="facebook">
          <Icon name="facebook" /> Iniciar sesión con Facebook
        </Button>
        <Divider horizontal>O</Divider>
        <Form>
          <Form.Field>
            <Form.Input
              placeholder="email"
              icon={<Icon name="remove circle" color="red" />}
              size="large"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              placeholder="Nombre completo"
              icon={<Icon name="remove circle" color="red" />}
              size="large"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              placeholder="nombre de usuario"
              icon={<Icon name="remove circle" color="red" />}
              size="large"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="password"
              placeholder="Password"
              icon={<Icon name="remove circle" color="red" />}
              size="large"
            />
          </Form.Field>
          <Button type="submit" primary fluid>
            Registrarte
          </Button>
        </Form>
      </div>
      <div style={styles.box}>
        ¿Tienes una cuenta?{' '}
        <a href="" onClick={handleClick}>
          Inicia Sesión
        </a>
      </div>
    </div>
  );
};
