import Link from 'next/link';
import moment from 'moment';
import './Blog.css';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Muhammad Osama',
  description: '',
};

async function getPosts() {
  const res = await fetch(
    'https://madebyosama-blog.pockethost.io/api/collections/posts/records?page=1&perPage=30&sort=updated',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div>
      <h2>2023</h2>
      {posts?.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
}

function Post({ post }: any) {
  const { id, image, title, excerpt, updated } = post || {};

  return (
    <Link href={`/blog/${id}`} className='blog-post'>
      <div className='blog-post-image'>
        {/* <Image
          src={`https://madebyosama-blog.pockethost.io/api/files/6hyl9irmmsadv2c/${id}/${image}`}
          height={150}
          width={150}
          alt='Blog Image'
        /> */}
      </div>
      <div className='blog-post-details'>
        <div className='blog-post-title'>{title}</div>
        <div className='blog-post-updated-date'>
          {moment.utc(updated).fromNow()}
        </div>
        {/* <div className='blog-post-excerpt'>{excerpt}</div> */}
      </div>
    </Link>
  );
}
