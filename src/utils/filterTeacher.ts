export const filterTeacher = (allTeachers: any, status: boolean) => {
    const teachers = allTeachers?.filter((teacher: any) => teacher.approved_as_teacher !== status);
    return teachers;
}