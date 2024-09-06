import Image from "next/image";
import React from "react";
import img from "../../../public/image_1.jpg";
const page = () => {
  return (
    <div>
      This is about page
      <Image
        src={
          "https://images.unsplash.com/photo-1720048171180-a8178a198fa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Next.js logo"
        width={180}
        height={38}
      />
      <Image
        src={
          "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1725620871~exp=1725621471~hmac=b49b54f520f47383a1a6141842be57e0ac4ca9eec6a40c0c3b755b7ca792ebf2"
        }
        alt="Next.js logo"
        width={180}
        height={38}
      />
    </div>
  );
};

export default page;
