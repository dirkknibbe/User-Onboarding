import * as yup from 'yup';

const formValidatorSchema = yup.object().shape({
first_name: yup
    .string()
    .trim()
    .required('Name is required!')
    .min(3, 'Name has to be at least three characters'),
email: yup
    .string()
    .email('gotta be a valid email address')
    .required('YOU FORGOT TO ENTER EMAIL ADDRESS'),
password: yup
    .string()
    .required("Please Enter your password")
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),    
termsOfService: yup.boolean().oneOf([true], 'must accept the terms!'),


})

export default formValidatorSchema;