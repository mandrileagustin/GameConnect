import { useField } from "formik";

export default function Input({label, ...props}){
    const [field, meta] = useField(props);

    return(
        <>
        <label>{label}</label>
        <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "form-control is-invalid":"form-control"}
        />
        {meta.touched && meta.error && <div className="invalid-feedback">{meta.error}</div>}
        </>
    )
}