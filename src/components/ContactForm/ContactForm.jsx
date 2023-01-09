import { useForm } from "react-hook-form";

import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../../redux/contactsApi";

import InputName from "./InputName";
import InputPhone from "./InputPhone";

export default function ContactForm() {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    const isDuplicate = contacts.some((obj) => obj.name === e.name);

    if (isDuplicate) {
      alert("name already exist");
      return;
    }

    addContact(e);

    reset();
  };

  return (
    <div className="flex-row">
      <h1 className="text-lg text-black text-center">Add Contact:</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 rounded-lg p-1 border-gray-600 w-full"
      >
        <InputName register={register} errors={errors} />
        <InputPhone register={register} errors={errors} />
        <input
          className="btn btn-sm mt-3 w-full"
          type="submit"
          value="Add contact"
        />
      </form>
    </div>
  );
}
