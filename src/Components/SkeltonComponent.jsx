import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

const SkeltonComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ title: "Loaded Content 🎉" });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <CardSkeleton />;
  }

  return <h2>{data.title}</h2>;
};

export default SkeltonComponent;
