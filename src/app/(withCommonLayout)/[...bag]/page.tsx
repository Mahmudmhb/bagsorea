"use client";
import { useParams } from "next/navigation";

const BagDetails = () => {
  const params = useParams();
  console.log(params.bag);
  return (
    <div>
      <h1>This is a single page {params.bag}</h1>
    </div>
  );
};

export default BagDetails;
