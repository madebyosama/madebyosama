async function getPost(postId: string) {
  const res = await fetch(
    `https://madebyosama-blog.pockethost.io/api/collections/posts/records/${postId}`,
    { next: { revalidate: 10 }, cache: 'no-store' }
  );
  const data = await res.json();
  return data;
}

export default async function Post({ params }: any) {
  const post = await getPost(params.id);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.description }} />
    </div>
  );
}
