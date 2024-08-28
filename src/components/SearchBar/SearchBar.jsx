import css from "./SearchBar.module.css";

export default function SearchBAr({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset();
    console.log(topic);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </header>
  );
}
