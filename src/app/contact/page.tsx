import Button from "@/Components/Button";
import ServerButton from "@/Components/ServerButton";
import React from "react";

const page = () => {
  return (
    <div>
      This is contact page
      {/* Client button*/}
      <Button />
      {/* Server button*/}
      <ServerButton />
    </div>
  );
};

export default page;
