import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Menu from "@mui/material/Menu";
import StyledDropzone from "./DropZone";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import "./upload.css";
import axios from "axios";
// import { styled } from "@mui/material/styles";
// import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Swal from "sweetalert2";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#181922b8",
            "--TextField-brandBorderFocusedColor": "#181922b8",
            "& label.Mui-focused": {
              color: "#181922",
            },
            "& label": {
              color: "#181922b8",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&.Mui-focused:after": {
              borderBottom: "2px solid #181922",
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#181922b8",
            "--TextField-brandBorderFocusedColor": "#181922b8",
            "& label.Mui-focused": {
              color: "#181922",
            },
            "& label": {
              color: "#181922b8",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#181922",
            "&:hover": {
              color: "#181922",
            },
          },
        },
      },
    },
  });

const banks = [
  "HDFC Bank",
  "ICICI Bank",
  "SBI Bank",
  "Canara Bank",
  "PNB Bank",
];
const langs = ["English", "தமிழ்", "മലയാളം", "తెలుగు", "हिन्दी"];

export default function Upload() {
  const [bank, setBank] = useState("");
  const [classes, setclass] = useState("dark disabled");
  const [password, setPassword] = useState("");
  // const [threshold, setThreshold] = useState("");
  const [encrypted, setEncrypted] = useState(false);
  const [msg, setMsg] = useState("");
  const [fselected, selected] = useState(false);

  const [pdfFile, setFile] = useState();
  const [language, setLang] = useState("English");

  const handleFile = (event) => {
    const selectedFile = event;
    setFile(selectedFile);
  };

  // const handleTH = (e) => {
  //   setThreshold(e.target.value);
  // };

  const fileSelected = (e) => {
    if (fselected !== e && fselected) setMsg("");
    if (fselected !== e) selected(e);
  };

  const chooseBank = (e) => {
    setBank(e.target.value);
    if (msg === "Please select your Bank!") setMsg("");
  };

  const chooseLang = (e) => {
    setLang(e.target.value);
  };
  const changePassword = (e) => {
    if (msg === "Enter Password!") setMsg("");
    setPassword(e.target.value);
  };

  const handleCheck = (e) => {
    if (msg === "Enter Password!") setMsg("");
    setEncrypted(e.target.checked);
  };

  const handleStart = (e) => {
    let canSubmit = false;

    if (fselected) {
      if (bank !== "") {
        if (!encrypted) {
          setMsg("");
          canSubmit = true;
        } else if (encrypted && !password) {
          setMsg("Enter Password!");
          canSubmit = false;
        } else if (encrypted && password) {
          setMsg("");
          canSubmit = true;
        }
      } else {
        setMsg("Please select your Bank!");
        canSubmit = false;
      }
    } else {
      setMsg("Please select your File!");
      canSubmit = false;
    }

    if (canSubmit) sendFile();
  };

  
  const sendFile = () => {
    const formData = new FormData();
    
    formData.append("pdfFile", pdfFile[0]);
    formData.append("bank", bank);
    formData.append("password", password ? password : null);
    formData.append("language", langs.indexOf(language));

    Swal.fire({
      title: "Upload the file?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `NO`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "File Uploading Please Wait!",
          text: "Please do not go back or press any key!",
          icon: "info",
          allowOutsideClick: false,
          showConfirmButton: false,
        });
        
        const headers = {
          "content-type": "multipart/form-data",
        };
        
        axios({
          method: "post",
          headers: headers,
          // url:"https://mt-server.onrender.com/upload",
          url: "http://localhost:8000/upload",
          data: formData,
        })
          .then((res) => {
            if (res.status === 200) {
              Swal.fire("File saved in the Dashboard", "", "success");

              // setBank("");
              // setPassword("");
              // setThreshold("");
              // setEncrypted(false);
              // setMsg("");
              // selected(false);
              // setFile("");
              // proceedUFile(false);
              // setFile();
              
            } else {
              console.log(res);
              Swal.fire("Somethings is wrong!\nTry again Later.", "", "error");
              console.log(res.message);
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Somethings is wrong!\nTry again Later.", "", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    if (fselected) {
      // console.log(pdfFile);
      if (bank) {
        if (!encrypted) setclass("dark");
        else if (encrypted && password) setclass("dark");
        else setclass("dark disabled");
      } else setclass("dark disabled");
    } else {
      setclass("dark disabled");
    }
  }, [encrypted, bank, password, fselected, pdfFile]);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const outerTheme = useTheme();

  return (
    <section id="upload">
      <div id="nav">
        <h3 style={{ fontWeight: 600, margin: 0 }}>
          {" "}
          Hello, <span style={{ color: "#55BF9D" }}>Purush G</span>{" "}
        </h3>
        <AccBtn />
      </div>

      <div id="uploading-area">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div class="container shadow">
              <StyledDropzone
                fileSelected={fileSelected}
                handleFile={handleFile}
              />

              <FormControlLabel
                sx={{
                  m: 0,
                  padding: "1%",
                  boxSizing: "border-box",
                  width: "100%",
                  justifyContent: "center",
                  color: "white",
                  background: "#55BF9D",
                  borderRadius: "0px 0px 15px 15px;",
                  boxShadow: "0px 20px 20px 12px #F4F4F4",
                }}
                control={
                  <Checkbox
                    checked={encrypted}
                    onChange={handleCheck}
                    inputProps={{ "aria-label": "controlled" }}
                    size="small"
                    color="success"
                    sx={{
                      color: red[50],
                      "&.Mui-checked": {
                        color: red[50],
                      },
                    }}
                  />
                }
                label="File is Password Protected"
              />
            </div>
          </Grid>

          <Grid item xs={12} md={6} id="form-right">
            <div className="form-container">
              <ThemeProvider theme={customTheme(outerTheme)}>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 120, width: "100%" }}
                  size="medium"
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    {" "}
                    Choose Your Bank{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={bank}
                    name="bank"
                    label="Choose Your Bank"
                    onChange={chooseBank}
                  >
                    {banks.map((b) => {
                      return <MenuItem value={b.split(' ')[0].toUpperCase()}>{b}</MenuItem>;
                    })}
                  </Select>
                  <FormHelperText>
                    {" "}
                    Make sure you choose the correct bank appt. to your
                    statement.{" "}
                  </FormHelperText>
                </FormControl>

                {/* <FormControl
                  sx={{ m: 1, minWidth: 120, width: "100%", display: "block" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    {" "}
                    Threshold Amount{" "}
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={"number"}
                    value={threshold}
                    onChange={handleTH}
                    onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
                  />
                  <BootstrapTooltip
                    placement="bottom-end"
                    arrow
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  >
                    <InfoIcon
                      fontSize="small"
                      sx={{ alignSelf: "end", cursor: "pointer" }}
                    />
                  </BootstrapTooltip>
                  <FormHelperText> (Optional) </FormHelperText>
                </FormControl> */}

                <FormControl
                  sx={{
                    m: 1,
                    minWidth: 120,
                    width: "100%",
                    display: encrypted ? "block" : "none",
                  }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={changePassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          className="no"
                          disableRipple
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>
                    {" "}
                    Refer & Enter Password correctly.{" "}
                  </FormHelperText>
                </FormControl>

                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 120, width: "100%" }}
                  size="medium"
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    {" "}
                    Choose your Language{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={language}
                    name="bank"
                    label="Choose Your Bank"
                    onChange={chooseLang}
                  >
                    {langs.map((b) => {
                      return <MenuItem value={b}>{b}</MenuItem>;
                    })}
                  </Select>
                  <FormHelperText>
                    {" "}
                    Make sure you choose the correct bank appt. to the your
                    statement.{" "}
                  </FormHelperText>
                </FormControl>
              </ThemeProvider>

              <div id="bottom">
                <small style={{ color: "#e05a5a" }}> {msg} </small>
                <button
                  id="start-process"
                  className={classes}
                  onClick={handleStart}
                >
                  {" "}
                  Start <KeyboardDoubleArrowRightOutlinedIcon />{" "}
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* <p id='footerText' style={{textAlign:'center', fontSize:'small', opacity:0.7, margin:0}}> ~ We will not share, copy or make illegal use of your data. Trust Us. ~ </p> */}
    </section>
  );
}

function AccBtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toAcc = () => {
    window.location.pathname = "/";
    window.location.pathname = "/account";
  };

  const logout = () => {
    window.location.pathname = "/";
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Account <ExpandMoreIcon />
      </button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "15px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={toAcc}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

// const BootstrapTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));
