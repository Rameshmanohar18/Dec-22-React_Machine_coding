import "../../src/skelton.css";

const Skeleton = ({
  width = "100%",
  height = "16px",
  borderRadius = "4px",
}) => {
  return <div className="skeleton" style={{ width, height, borderRadius }} />;
};

export default Skeleton;
