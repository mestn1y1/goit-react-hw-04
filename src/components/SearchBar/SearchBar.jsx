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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
