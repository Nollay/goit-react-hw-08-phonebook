import { Container } from 'components/phonebook/container';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(logIn({ email: form.email.value, password: form.password.value }));
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <form onSubmit={handleSubmit} autoComplete="off">
          <span>Email</span>
          <li>
            <input type="email" name="email" />
          </li>
          <span>Password</span>
          <li>
            <input type="password" name="password" />
          </li>
          <button type="submit">Login</button>
        </form>
      </Container>
    </>
  );
};
export default Login;
