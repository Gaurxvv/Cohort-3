export default async function ({ params }: any) {
  const blogId = (await params).folderId;
  return (
    <div className="text-white w-screen">
      {JSON.stringify(blogId)}
      <div>hey there</div>
    </div>
  );
}
