import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
	email: yup.string().email("Please enter a valid email").required("Required"),
	displayName: yup.string().required("Required"),
	password: yup
		.string()
		.min(6)
		.matches(passwordRules, { message: "Please create a stronger password" })
		.required("Required"),
});

export const loginSchema = yup.object().shape({
	email: yup.string().email("Please enter a valid email").required("Required"),
	password: yup.string().required("Required"),
});
