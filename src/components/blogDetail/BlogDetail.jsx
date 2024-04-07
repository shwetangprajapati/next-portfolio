import Image from "next/image";

const BlogDetail = ({ post }) => {
  return (
    <div className="container mx-auto py-8">
      <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4">
        <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <Image src={post.img} alt={post.title} width={1500} height={400} />
        <div className="p-6">
          <p className="text-gray-600 text-sm mb-2">
            Published on <i>{post.createdAt.slice(0,10)}</i>
          </p>
          <div
            className="sm:text-xl text-lg   text-gray-900 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
