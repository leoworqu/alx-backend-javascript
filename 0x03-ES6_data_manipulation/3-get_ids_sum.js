export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return studentList.reduce((sum, student) => sum + student.id, 0);
  }
  return [];
}
