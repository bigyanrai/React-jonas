import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  console.log(username);
  if (!username) return null;

  return (
    <div className="md:block hidden text-sm font-semibold">{username}</div>
  );
}

export default Username;
