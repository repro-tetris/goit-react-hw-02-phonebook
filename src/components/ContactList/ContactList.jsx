import ContactItem from "../ContactItem/ContactItem";
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
