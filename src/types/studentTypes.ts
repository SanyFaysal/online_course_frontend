export type IStudent = {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    password: string;
    password2: string;

}

export type IEnrollStudent = {
    student: string;
    course: string;
    status: 'enrolled'
}