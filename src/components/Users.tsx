import { getUsers } from "../apis/users.api";

import { useQueryString } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";

export default function UsersComponent() {
  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString) || 1;
  console.log("page", page);

  const { data } = useQuery({
    //neu Query key trung nhau, thi se share data voi nhau
    queryKey: ["users", page],
    //Khi page thay đổi thỉ queryFn bị gọi lại
    queryFn: () => {
      return getUsers(page, 2);
    },
  });
  console.log(data);
  return (
    <>
      <h1>Hello</h1>
      {data ? (
        <ul>
          {data?.map((user) => (
            <>
              <li key={user._id}>{user.email}</li>
              <li>
                <div>
                  Date of Birth:{" "}
                  {new Date(user.date_of_birth).toLocaleDateString()}
                </div>
              </li>
            </>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
