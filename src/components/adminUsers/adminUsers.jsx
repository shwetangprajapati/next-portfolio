import { getUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "@/lib/action";
import Heading from "../heading/Heading";
import CustomButton from "../buttons/CustomButton";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="container mx-auto p-4">
      <Heading title={"Users"} image="./underline.svg" />

      {users.map((user) => (
        <div
          className="user flex items-center justify-between gap-20"
          key={user.id}
        >
          <div className="detail flex items-center gap-20">
            <Image
              src={user.img || "/noAvatar.png"}
              alt="user logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <CustomButton>Delete</CustomButton>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
