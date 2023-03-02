import { useEffect } from "react";
import {
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  Input,
  Icon,
} from "@mui/material";
import "./Desktop1.css";

const Desktop1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="desktop-11">
      <div className="dashboard-login-dark-theme">
        <img className="vectors-icon" alt="" src="../vectors.svg" />
        <form className="form">
          <div className="section-forgot">
            <a className="forgot-password" id="forgetPassword">
              Forgot password?
            </a>
            <small className="remember-me">Remember me</small>
            <FormControlLabel
              className="section-forgot-child"
              label=""
              control={<Checkbox color="primary" size="medium" />}
            />
          </div>
          <Button
            className="login-btn"
            sx={{ width: 300 }}
            variant="contained"
            color="success"
          >
            login
          </Button>
          <div className="password">
            <TextField
              className="rectangle"
              sx={{ width: 300 }}
              color="primary"
              variant="filled"
              type="password"
              label="Password"
              placeholder="Password"
              size="medium"
              margin="none"
              required
            />
          </div>
          <TextField
            className="username"
            sx={{ width: 300 }}
            color="primary"
            variant="filled"
            type="text"
            label="Username"
            placeholder="Username"
            size="medium"
            margin="none"
            required
          />
          <p className="find-hope-with" data-animate-on-scroll>
            Find hope with our depression detection software
          </p>
          <h1 className="sign-in">Sign in</h1>
        </form>
        <img
          className="psichologo-konsult-1-869x550-r-icon"
          alt="Phycologist sitting with patient"
          loading="eager"
          src="../psichologo-konsult1869x550removebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Desktop1;
