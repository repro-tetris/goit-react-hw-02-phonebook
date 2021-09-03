import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
