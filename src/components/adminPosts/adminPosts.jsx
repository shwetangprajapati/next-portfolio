import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import Heading from "../heading/Heading";
import CustomButton from "@/components/buttons/CustomButton";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4">
      <Heading title={"Posts"} image="./underline.svg" />

      {posts.map((post) => (
        <div
          className="post flex items-center justify-between mb-4"
          key={post.id}
        >
          <div className="detail flex items-center space-x-4">
            <Image
              src={post.img || "/noAvatar.png"}
              alt="user logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="postTitle">{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
                  <CustomButton>Delete</CustomButton>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
