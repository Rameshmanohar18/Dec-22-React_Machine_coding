import Skeleton from "./SkeltonComponent";

const CardSkeleton = () => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <Skeleton height="180px" borderRadius="8px" />
      <br />
      <Skeleton width="60%" />
      <br />
      <Skeleton width="80%" />
    </div>
  );
};

export default CardSkeleton;
