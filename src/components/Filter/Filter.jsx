import { useFilter } from "../../redux/filterSlice.js";

export default function Filter() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="mt-2">
      <p className="text-lg text-black text-center">Find contacts by name:</p>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className="input input-sm w-full"
      />
    </div>
  );
}
