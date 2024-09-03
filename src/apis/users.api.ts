import { Users } from "../types/users.type";
import http from "../utils/http";

export const getUsers = async (
  page: number | string,
  limit: number | string
) => {
  try {
    const res = await http.get<Users>(`users?page=${page}&limit=${limit}`);
    console.log("res", res.data);
    return res.data;
  } catch (error) {
    console.log("Error fetching users:", error);
    return;
  }
};

export const getStudentById = () => {};
