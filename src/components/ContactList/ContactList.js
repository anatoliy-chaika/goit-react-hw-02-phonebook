// import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export const Contactlist = ({ data }, onDelete) => {
  return (
    <ul>
      {data.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
