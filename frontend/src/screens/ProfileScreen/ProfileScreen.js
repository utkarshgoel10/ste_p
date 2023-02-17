import React, { useState, useEffect } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import {spoc} from "./spoc";
import { tnp as tnpList } from './tnp';
import calender from '../../assets/STEPCalender.pdf'
const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "dlpia5qvw");
      fetch("https://api.cloudinary.com/v1_1/dlpia5qvw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));
  };


  const spc = spoc.find((spc) => email === spc.email);
  let title = "Naman";
  let phone = "9711444714";
  if (spc) {
      title = spc.title;
      phone = spc.mobile;
  }
  
  const tnp = tnpList.find(obj => obj.email.some(e => e === email));
  let tnpName = "Ritin Bhel";
  let tnpMobile = "9953559259";
  if (tnp) {
      tnpName = tnp.tnpName;
      tnpMobile = tnp.tnpMobile;
  }

  return (
    <MainScreen title="Profile">
      <div className="profileWrapper" style={{marginBottom:'1rem'}}>
        <Container>
          <Row>
            <Col xl={6} sm={12} lg={6}>
              <h3>
                We are thrilled to welcome you{" "}
                <span style={{ fontWeight: "600", color: "white" }}>
                  {name}
                </span>{" "}
                to our mentorship program at Salaah. We know that under your
                guidance and support, our mentees will be able to achieve their
                goals and grow both personally and professionally. We are sure
                that this will be an invaluable experience for all of us.
                <br />
                Welcome to Salaah, {name}!
              </h3>
              <h4>
                Contact Info:{" "}
                <span style={{ fontWeight: "600", color: "white" }}>
                  {email}
                </span>
              </h4>              
              <h4>
                <b>SPOC Details: </b>
                <br />
                {title}: {phone}
              </h4>
              <h4>
                <b>T&P Details: </b>
                <br />
                {tnpName}: {tnpMobile}
              </h4>
              <br />
              <a href={calender} download className="report-btn" style={{marginBottom:'1rem'}}>Report Submission Schedule</a>
              <br />
            </Col>
            <Col xl={6} sm={12} lg={6}>
              <img src={pic} alt={name} className="profilePic" style={{marginTop: '1rem'}}/>
            </Col>
          </Row>
        </Container>
      </div>
    </MainScreen>
  );
};

export default ProfileScreen;
