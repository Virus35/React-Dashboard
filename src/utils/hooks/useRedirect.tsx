import { useNavigate } from "react-router-dom";

const useRedirect = (route:string) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate(route);
  };

  return handleSignInClick;
};

export default useRedirect;

