import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const resp = await fetch(url);
  const data = await resp?.json();

  //ambas son lo mismo
  //const users = data?.data?.map((likeUser) => localhostUserToModel(likeUser));
  const users = data?.data?.map(localhostUserToModel);

  return users;
};
