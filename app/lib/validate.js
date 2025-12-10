export const validateKey = (tryKey) => {
  const KEY_ADMIN = "Manager*25";
  //Compruebo que las keys coincidan
  if (tryKey === KEY_ADMIN) {
    return true;
  } else {
    return false;
  }
};
