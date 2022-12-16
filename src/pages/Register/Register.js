import { Container } from 'components/phonebook/container';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    e.currentTarget.reset();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off">
        <span>Username</span>
        <li>
          <input type="text" name="name" />
        </li>
        <span>Email</span>
        <li>
          <input type="email" name="email" />
        </li>
        <span>Password</span>
        <li>
          <input type="password" name="password" />
        </li>
        <button type="submit">Register</button>
      </form>
    </Container>
  );
};
export default Register;
