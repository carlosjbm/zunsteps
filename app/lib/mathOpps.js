export const getPorcentage = (value, total) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};
