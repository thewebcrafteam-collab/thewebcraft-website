import { Link } from "react-router-dom";

const WorkCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="work-card">

      <div className="work-image">
        <img
          src={image}
          alt={title}
          className="work-media"
        />
      </div>

      <div className="work-content">
        <h3>{title}</h3>
        <span className="explore-link">Explore →</span>
      </div>

    </Link>
  );
};

export default WorkCard;