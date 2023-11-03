import { ChangeEvent, useEffect, useState } from "react";
import Message from "./Message";

interface formExample {
  username: string;
  email: string;
}

const SimpleForm = () => {
  const [formState, setFormState] = useState<formExample>({
    username: "",
    email: "",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect Called!");
  }, []);

  useEffect(() => {
    // console.log("formSatate Changed!");
  }, [formState]);

  useEffect(() => {
    // console.log("Email Changed!");
  }, [email]);

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

      {username === "oscarfv" && <Message />}
      
    </>
  );
};

export default SimpleForm;
