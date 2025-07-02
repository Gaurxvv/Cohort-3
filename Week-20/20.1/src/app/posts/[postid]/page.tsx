import axios from "axios";

export default async function Post({ params }: any) {
  const postId = (await params).postid;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = response.data;
  return (
    <div>
      Blog page {postId} <br />
      Title - {data.title}
      <br />
      Body - {data.body}
    </div>
  );
}
