import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>shirt id: {params.id}</div>;
};

export default page;
