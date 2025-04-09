interface CardProps {
  title: string;
  content: string;
  link: string;
}

const Card = ({ title, content, link }: CardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
      </div>
      <div className="card-footer">
        <a href={link} className="card-link">Read more</a>
      </div>
    </div>
  );
};

export default Card;