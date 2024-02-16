export type IStudent = {
    mobile_number: string;
    name: string;
    password: string;
    password2: string;

}

export type IEnrollStudent = {
    student: string;
    course: string;
    status: 'enrolled'
}