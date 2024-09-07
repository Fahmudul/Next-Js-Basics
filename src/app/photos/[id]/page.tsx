import React from "react";

const DetailsPage = async ({ params }: { params: { id: string } }) => {
  let post;
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
    post = data;
  } catch (error: any) {
    throw new Error(error);
  }
  return (
    <div>
      <p>Body: {post.body}</p>
      <p>Body: {post.title}</p>
    </div>
  );
};

export default DetailsPage;
