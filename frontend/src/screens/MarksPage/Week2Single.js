import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNoteAction,
  updateNoteAction2,
} from "../../actions/notesActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";

function SingleNote({ match, history }) {
  const [name, setName] = useState();
  const [branch, setBranch] = useState();
  const [mobile, setMobile] = useState();
  const [roll, setRoll] = useState();

  const [w1intro, setW1intro] = useState();
  const [w1project, setW1project] = useState();
  const [w1intern, setW1intern] = useState();
  const [w1extra, setW1extra] = useState();
  const [w1profile, setW1profile] = useState();
  const [w1skills, setW1skills] = useState();  
  const [w1comments, setW1comments] = useState();  
  
  const [w2intro, setW2intro] = useState();
  const [w2project, setW2project] = useState();
  const [w2intern, setW2intern] = useState();
  const [w2extra, setW2extra] = useState();
  const [w2profile, setW2profile] = useState();
  const [w2skills, setW2skills] = useState();  
  const [w2comments, setW2comments] = useState();  

  const [w3intro, setW3intro] = useState();
  const [w3project, setW3project] = useState();
  const [w3intern, setW3intern] = useState();
  const [w3extra, setW3extra] = useState();
  const [w3profile, setW3profile] = useState();
  const [w3skills, setW3skills] = useState();  
  const [w3comments, setW3comments] = useState();  

  const [w4intro, setW4intro] = useState();
  const [w4project, setW4project] = useState();
  const [w4intern, setW4intern] = useState();
  const [w4extra, setW4extra] = useState();
  const [w4profile, setW4profile] = useState();
  const [w4skills, setW4skills] = useState();  
  const [w4comments, setW4comments] = useState();  

  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    history.push("/studentreport");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);

      setName(data.name);
      setBranch(data.branch);
      setRoll(data.roll);
      setMobile(data.mobile);

      setW1intro(data.w1intro);
      setW1intern(data.w1intern);
      setW1extra(data.w1extra);
      setW1skills(data.w1skills);
      setW1profile(data.w1profile);
      setW1project(data.w1project);
      setW1comments(data.w1comments);

      setW2intro(data.w2intro);
      setW2intern(data.w2intern);
      setW2extra(data.w2extra);
      setW2skills(data.w2skills);
      setW2profile(data.w2profile);
      setW2project(data.w2project);
      setW2comments(data.w2comments);

      setW3intro(data.w3intro);
      setW3intern(data.w3intern);
      setW3extra(data.w3extra);
      setW3skills(data.w3skills);
      setW3profile(data.w3profile);
      setW3project(data.w3project);
      setW3comments(data.w3comments);

      setW4intro(data.w4intro);
      setW4intern(data.w4intern);
      setW4extra(data.w4extra);
      setW4skills(data.w4skills);
      setW4profile(data.w4profile);
      setW4project(data.w4project);
      setW4comments(data.w4comments);
    };

    fetching();
  }, [match.params.id]);

  const resetHandler = () => {
    setName("");
    setBranch("");
    setRoll("");
    setMobile("");
    setW2intro("");
    setW2project("");
    setW2intern("");
    setW2extra("");
    setW2skills("");
    setW2profile("");
    setW2comments("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateNoteAction2(
        match.params.id,
        name,
        mobile,
        branch,
        roll,
        w1intro || undefined,
        w1project || undefined,
        w1intern || undefined,
        w1skills || undefined,
        w1profile || undefined,
        w1extra || undefined,
        w1comments || undefined,
        w2intro,
        w2project,
        w2intern,
        w2skills,
        w2profile,
        w2extra,
        w2comments,
        w3intro || undefined,
        w3project || undefined,
        w3intern || undefined,
        w3skills || undefined,
        w3profile || undefined,
        w3extra || undefined,
        w3comments || undefined,
        w4intro || undefined,
        w4project || undefined,
        w4intern || undefined,
        w4skills || undefined,
        w4profile || undefined,
        w4extra || undefined,
        w4comments || undefined,
      )
    );
    if (
      !name ||
      !mobile ||
      !branch ||
      !roll ||
      !w2intro ||
      !w2project ||
      !w2intern ||
      !w2skills ||
      !w2profile ||
      !w2extra ||
      !w2comments
    )
      return;

    resetHandler();
    history.push("/studentreport");
  };

  return (
    <MainScreen title="Week 2 Grades">
      <Container>
        <Card>
          <Card.Header>Edit Details</Card.Header>
          <Card.Body>
            <Form onSubmit={updateHandler}>
              {loadingDelete && <Loading />}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {errorDelete && (
                <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
              )}
              <Form.Group controlId="w2intro">
                <Form.Label>Introduction: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w2intro}
                  placeholder="Week 2 Introduction"
                  onChange={(e) => setW2intro(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w2project">
                <Form.Label>Project: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w2project}
                  placeholder="Week 2 Project"
                  onChange={(e) => setW2project(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="W2intern">
                <Form.Label>Internships: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w2intern}
                  placeholder="Week 2 Internships"
                  onChange={(e) => setW2intern(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w2extra">
                <Form.Label>Extracurricular: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w2extra}
                  placeholder="Week 2 Extracurricular"
                  onChange={(e) => setW2extra(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w2skills">
                <Form.Label>Skills: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w2skills}
                  placeholder="Week 2 Skills"
                  onChange={(e) => setW2skills(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w2profile">
                <Form.Label>Technical Profiles: </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  value={w2profile}
                  placeholder="Week 2 Technical Profiles"
                  onChange={(e) => setW2profile(e.target.value)}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="w2comments">
              <Form.Label>Remarks: </Form.Label>
              <Form.Control
                type="type"
                maxlength="50"
                value={w2comments}
                placeholder="Week 2 Remarks"
                onChange={(e) => setW2comments(e.target.value)}
                required={true}
              />
            </Form.Group>
              {loading && <Loading size={50} />}
              <button className="primary-btn" type="submit">
                Update
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </MainScreen>
  );
}

export default SingleNote;