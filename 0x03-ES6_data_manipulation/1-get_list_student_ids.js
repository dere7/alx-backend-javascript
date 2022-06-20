export default function getListStudentIds(objs) {
  if (!(objs instanceof Array)) return [];
  return objs.map((obj) => obj.id);
}
