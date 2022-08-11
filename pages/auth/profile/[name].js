import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signIn } from "../../../store/slices/auth";
export const Account = () => {
  const dispatch = useDispatch();
  const accountDetails = useSelector((state) => state.userSession);
  const handleLogout = () => {
    dispatch(signIn({}));
  };
  return (
    <div className="main">
      <h1>Welcome to Redux Store</h1>
      <p>Account Details</p>
      <h5>FullName: {accountDetails.userObj.userName}</h5>
      <h5>Email: {accountDetails.userObj.email}</h5>
      <button onClick={handleLogout}>Login</button>
    </div>
  );
};
