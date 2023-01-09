export default function InputPhone({ register, errors }) {
  return (
    <>
      <label htmlFor="number">
        <p>Number</p>
        <input
          className="input input-sm w-full"
          type="tel"
          maxLength={20}
          autoComplete="off"
          {...register("number", {
            required: true,
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
          })}
        />
      </label>
      {errors?.number && (
        <p style={{ color: "red" }}>
          Phone number must be digits and can contain spaces, dashes,
          parentheses and can start with +
        </p>
      )}
    </>
  );
}
