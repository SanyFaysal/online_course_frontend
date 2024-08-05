export type IStudent = {
    email: string;
    name: string;
    password: string;
    password2: string;

}

export type IEnrollStudent = {
    student: string;
    course: string;
    status: 'enrolled'
}