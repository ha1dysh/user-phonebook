export default function InputName({ register, errors }) {
  return (
    <>
      <label htmlFor="name">
        <p>Name</p>
        <input
          className="input input-sm w-full"
          type="text"
          autoComplete="off"
          maxLength={17}
          {...register("name", {
            required: true,

            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          })}
        />
      </label>
      {errors?.name && (
        <p style={{ color: "red" }}>
          'Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore d &sbquo;
          Artagnan'
        </p>
      )}
    </>
  );
}
