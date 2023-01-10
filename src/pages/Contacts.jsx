import { useFilter } from "../redux/filterSlice";

import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "../redux/contactsApi";

export default function Contacts() {
  const { data: contacts = [] } = useGetContactsQuery();
  const [delContact] = useDeleteContactMutation();

  const { filter } = useFilter();

  const filterContacts = () => {
    if (filter === "") {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className="w-56 mx-auto">
      <ContactForm />
      <Filter />
      <h2 className="text-black text-lg mt-2 text-center">Contacts:</h2>
      {contacts.length > 0 && (
        <ul className="inline-block border-2 rounded-lg p-1 border-gray-600 w-full">
          {filterContacts(contacts).map((e) => (
            <li className="flex-row" key={e.id}>
              <div className="flex justify-between">
                <span className="text-black text-lg">{e.name}</span>
                <button
                  className="btn btn-xs text-white"
                  onClick={() => delContact(e.id)}
                >
                  Delete
                </button>
              </div>
              <div className="place-self-center">{e.number}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
