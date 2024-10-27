const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  throw new Error("No implementado");
};
const loadPrevPage = async () => {
  throw new Error("No implementado");
};
const onUserChanged = () => {
  throw new Error("No implementado");
};
const reloadPage = () => {
  throw new Error("No implementado");
};

export default {
  loadNextPage,
  loadPrevPage,
  onUserChanged,
  reloadPage,
  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
