export const formatDate = (d: Date): string => {
  let month = String(d.getMonth() + 1);
  if (month.length === 1) {
    month = '0' + month;
  }
  let day = String(d.getDate());
  if (day.length === 1) {
    day = '0' + day;
  }
  const year = d.getFullYear();
  return year + '-' + month + '-' + day;
};
