import { message } from "antd"

export const showErrorModal = (errors: any) => {
    if (errors) {
        const errorField: any = Object.keys(errors)
        const errorMessage = errors[errorField][0]
        message.error(errorMessage)
    }
}