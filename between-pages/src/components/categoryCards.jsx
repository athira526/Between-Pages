function CategoryCard({ imgSrc, title, onClick }) {
  return (
    <div className="category-card" onClick={onClick}>
      <img src={imgSrc} alt={title} />
      <div className="overlay">{title}</div>
    </div>
  );
}
export default CategoryCard;
