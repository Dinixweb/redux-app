import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/slices/auth";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    dispatch(signIn({ userName, email }));
  };
  return (
    <div className="main">
      <input
        type="name"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};
