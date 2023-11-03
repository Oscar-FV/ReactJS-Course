import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {

  const { onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

//   const { username, email, password } = useForm;  //! Another way to get the values of the form

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="your-mail@something.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Write A Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={ onResetForm } >Reset</button>
      
    </>
  );
};

export default FormWithCustomHook;
