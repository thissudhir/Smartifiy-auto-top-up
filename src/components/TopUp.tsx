import {
  Box,
  Button,
  Grid,
  Slider,
  styled,
  Switch,
  SwitchProps,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// STYLES FOR ALL THE COMPONENTS OF THE PAGE
interface Styles {
  [key: string]: React.CSSProperties;
}
const styles: Styles = {
  titleStyle: {
    fontWeight: 600,
    fontSize: "24px",
  },
  subtitleStyle: {
    fontWeight: 100,
    fontSize: "16px",
    color: "rgba(123, 123, 123, 1)",
  },

  mainBodyStyle: {
    display: "flex",
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // width: "1030px",
    // height: "588px",
    top: "-693px",
    // left: "292px",
    gap: "0px",
    border: "1px 0px 0px 0px",
    opacity: "0px",
  },
  firstBodyStyle: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    borderRadius: "24px",
    margin: "10px",
    gap: "16px",
    padding: "40px",
    width: "990px",
    height: "170px",
    top: "20px",
    left: "20px",
  },
  secondBodyStyle: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    borderRadius: "24px",
    margin: "10px",
    gap: "16px",
    padding: "40px",
    width: "990px",
    height: "358px",
    top: "210px",
    left: "20px",
  },
  buttonStyle: {
    background: "#9747FF",
    borderRadius: "8px",
    width: "268px",
    height: "48px",
    padding: "12px ",
    gap: "10px",
    opacity: "0px",
    "&:hover": {
      backgroundColor: "#B563FF",
    },
  },
  linkStyle: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "left",
    color: "#7B7B7B",
  },
  markLabelStyles: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    // lineHeight: "24px",
    // textAlign: "center",
  },
  markSpanLableStyle: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 500,
    // lineHeight: "24px",
    // textAlign: "right",
    color: "#7B7B7B",
  },
};

// STYLES FOR THE CUSTOM SWITCH
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#25AE9D",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    // "&.Mui-disabled .MuiSwitch-thumb": {
    //   color:
    //     theme.palette.mode === "light"
    //       ? theme.palette.grey[100]
    //       : theme.palette.grey[600],
    // },
    // "&.Mui-disabled + .MuiSwitch-track": {
    //   opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    // },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const renderLabel = (value, labelText) => (
  <>
    <Typography sx={styles.markLabelStyles}>${value} </Typography>
    <span style={styles.markSpanLableStyle}>{labelText}</span>
  </>
);
//LABEL FOR THE SLIDER
interface Mark {
  value: number;
  label: React.ReactNode;
}
const marks: Mark[] = [
  {
    value: 5,
    label: (
      <>
        <Typography sx={styles.markLabelStyles}>$5 </Typography>
        <span style={styles.markSpanLableStyle}>500 credits</span>
      </>
    ),
  },
  {
    value: 10,
    label: (
      <>
        <Typography sx={styles.markLabelStyles}>$10 </Typography>
        <span style={styles.markSpanLableStyle}>1200 credits</span>
      </>
    ),
  },
  {
    value: 15,
    label: (
      <>
        <Typography sx={styles.markLabelStyles}>$15 </Typography>
        <span style={styles.markSpanLableStyle}>1700 credits</span>
      </>
    ),
  },
  {
    value: 20,
    label: (
      <>
        <Typography sx={styles.markLabelStyles}>$20 </Typography>
        <span style={styles.markSpanLableStyle}>2500 credits</span>
      </>
    ),
  },
  {
    value: 25,
    label: (
      <>
        <Typography sx={styles.markLabelStyles}>$25 </Typography>
        <span style={styles.markSpanLableStyle}>3900 credits</span>
      </>
    ),
  },
  {
    value: 30,
    label: (
      <>
        <Typography sx={styles.markLabelStyles}>$30 </Typography>
        <span style={styles.markSpanLableStyle}>5000 credits</span>
      </>
    ),
  },
];

// STYLES FOR THE CUSTOM SLIDER
const IOSSlider = styled(Slider)(({ theme }) => ({
  color: "#9747FF",
  height: 8,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 22,
    width: 22,
    backgroundColor: "#fff",

    border: "6px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&::before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
}));
const TopUp = () => {
  const [rate, setRate] = useState(1200);
  // const [autoTopUp, setAutoTopUp] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    // setRate(rate)
    console.log(rate);
    // console.log(marks);
  };
  return (
    <Grid justifyContent="center">
      <Grid item xs={18} md={6}>
        <Box sx={styles.mainBodyStyle}>
          {!toggle ? (
            <Box sx={styles.firstBodyStyle}>
              <Typography variant="h4" sx={styles.titleStyle}>
                Setup Auto Top-up{" "}
                <IOSSwitch
                  sx={{ m: 1 }}
                  onClick={() => {
                    setToggle(true);
                  }}
                />
              </Typography>
              <Typography variant="body1" sx={styles.subtitleStyle}>
                Once the credit goes below the threshold value, credits can be
                auto purchased. Setup auto top-up to enjoy uninterrupted
                services. You can disable this anytime to stop auto top-up.
              </Typography>
            </Box>
          ) : (
            <Box sx={styles.secondBodyStyle}>
              <Typography variant="h4" sx={styles.titleStyle}>
                Setup Auto Top-up{" "}
                <IOSSwitch
                  sx={{ m: 1 }}
                  onClick={() => {
                    setToggle(false);
                  }}
                  // defaultChecked
                  // checked={autoTopUp}
                  // onChange={(e) => setAutoTopUp(e.target.checked)}
                />
              </Typography>
              <Typography variant="body1" sx={styles.subtitleStyle}>
                Once the credit goes below a minimum threshold{" "}
                <strong style={{ color: "#9747FF" }}>50</strong>, we will
                auto-purchase <strong style={{ color: "#9747FF" }}>1200</strong>{" "}
                credits and add them to your account.{" "}
                <a href="#" style={styles.linkStyle}>
                  Learn more
                </a>
              </Typography>
              <IOSSlider
                marks={marks}
                step={null}
                value={rate}
                defaultValue={10}
                onChange={(event, newValue) => {
                  const selectedMark = marks.find(
                    (mark) => mark.value === newValue
                  );
                  if (selectedMark) {
                    console.log("Value:", newValue);
                    console.log("Label:", selectedMark.label.props.children);
                  }
                  setRate(newValue as number);
                }}
                min={5}
                max={30}
              />
              <Button
                variant="contained"
                sx={styles.buttonStyle}
                onClick={handleClick}
              >
                Confirm auto-purchases
              </Button>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopUp;
