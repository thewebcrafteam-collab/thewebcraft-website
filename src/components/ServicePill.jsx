const ServicePill = ({ label, icon, target }) => {
  const handleClick = () => {
    const el = document.getElementById(target);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <button className="service-pill" onClick={handleClick}>
      <span>{icon}</span>
      {label}
    </button>
  );
};

export default ServicePill;