import { Button } from "@mui/material";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <div className="dashboard-login-dark-theme">
        <nav className="navs">
          <div className="star-parent">
            <img className="frame-child" alt="" src="../star-1.svg" />
            <label className="logo">Logo</label>
          </div>
        </nav>
        <img
          className="dashboard-login-dark-theme-child"
          alt=""
          src="../rectangle-1.svg"
        />
        <h1 className="hello-user">Need Help ?</h1>
        <img
          className="friendly-psychologist-standing-icon"
          alt=""
          src="../friendlypsychologiststandingclipboardleaningwallwaitingpatientfriendlypsychologiststandingclipboard145415623removebgpreview-1@2x.png"
        />
        <Button
          className="primary-small-default"
          sx={{ width: 132 }}
          variant="contained"
          color="primary"
        >
          Predict
        </Button>
      </div>
      <img className="vectors-icon" alt="" src="../vectors.svg" />
    </div>
  );
};

export default Desktop1;
