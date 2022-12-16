import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/UseAuth';
import { Navifation, Span } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Navifation>
      <NavLink to="/">
        <Span>PHONEBOOK</Span>
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Navifation>
  );
};
