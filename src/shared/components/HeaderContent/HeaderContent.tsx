import React from "react";
import "./HeaderContent.scss";
import useRedirect from "../../../utils/hooks/useRedirect";
export const HeaderContent: React.FC = () => {
  const redirect = useRedirect("/login");
  return (
    <div className="header-content-container">
      <h4>Unlimited movies, TV shows and more</h4>
      <span>Watch anywhere. Cancel anytime.</span>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div>
        <button onClick={redirect}>Sign In</button>
      </div>
    </div>
  );
};
