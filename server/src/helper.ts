import { ZodError } from "zod";

export const formatError = (issues: ZodError) => {

    let errors: any = {};

    issues.errors?.map((issue) => {
        errors[issue.path?.[0]] = issue.message
    })

    return errors;
}