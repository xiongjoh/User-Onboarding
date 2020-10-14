import * as yup from 'yup'

export default yup.object().shape({
    name: yup
    .string()
    .required('name is required')
    .min(3,"minimum username length is 3"),
    email: yup
    .string()
    .email("must be a valid email address")
    .required('email is required'),
    password: yup
    .string()
    .required('must have a password set')
    .min(8, "minimum password length must be 8 characters long"),
    role: yup
    .string()
    .oneOf(['student','tl','instructor','alumni'], "please select a role"),
    workstatus: yup
    .string()
    .oneOf(['working', 'notworking'], 'please choose a work status'),
    tos: yup
    .boolean().oneOf([true], 'Terms of Service must be checked'),
})