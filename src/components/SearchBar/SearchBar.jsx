export default function SearchBAr({ onSubmit }) {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
