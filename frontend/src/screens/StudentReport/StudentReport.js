import React, { useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Col,
} from "reactstrap";

function MyNotes({ history, search }) {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  // const filteredNotes = notes.filter((note) =>
  //   note.title.toLowerCase().includes(search.toLowerCase())
  // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <MainScreen title={`Grades`}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loading && <Loading />}
        {loadingDelete && <Loading />}
        <Col lg="10" md="12">
          <Card className="custom-card">
            <CardHeader>
              <CardTitle
                tag="h2"
                className="poppins"
                style={{ color: "white" }}
              >
                Week 1
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive hover>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Adm Num</th>
                    <th>Intro</th>
                    <th>Projects</th>
                    <th>Skills</th>
                    <th>Extra</th>
                    <th>Intern</th>
                    <th className="text-center">Profile</th>
                    <th className="text-center">Remarks</th>                    
                    <th className="text-center">Edit</th>                    
                  </tr>
                </thead>
                <tbody>
                  {notes &&
                    notes.map((note) => (
                      <tr key={note._id}>
                        <td>{note.name}</td>
                        <td>{note.roll}</td>
                        <td>{note.w1intro}/5</td>
                        <td>{note.w1project}/5</td>
                        <td>{note.w1skills}/5</td>
                        <td>{note.w1extra}/5</td>
                        <td>{note.w1intern}/5</td>
                        <td className="text-center">{note.w1profile}/5</td>                        
                        <td style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{note.w1comments}</td>
                        <td className="text-center">
                          <Link to={`/week1/${note._id}`}>
                            <FaRegEdit size={25} />
                          </Link>
                        </td>                        
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Link to="/week1dash">
            <button className="report-btn">Generate Week 1 Report</button>
          </Link>
        </Col>
        <br />
        <br />
        <Col lg="10" md="12">
          <Card className="custom-card">
            <CardHeader>
              <CardTitle
                tag="h2"
                className="poppins"
                style={{ color: "white" }}
              >
                Week 2
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive hover>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Adm Num</th>
                    <th>Intro</th>
                    <th>Projects</th>
                    <th>Skills</th>
                    <th>Extra</th>
                    <th>Intern</th>
                    <th className="text-center">Profile</th>
                    <th className="text-center">Remarks</th>
                    <th className="text-center">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {notes &&
                    notes.map((note) => (
                      <tr key={note._id}>
                        <td>{note.name}</td>
                        <td>{note.roll}</td>
                        <td>{note.w2intro}/5</td>
                        <td>{note.w2project}/5</td>
                        <td>{note.w2skills}/5</td>
                        <td>{note.w2extra}/5</td>
                        <td>{note.w2intern}/5</td>
                        <td className="text-center">{note.w2profile}/5</td>
                        <td style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{note.w2comments}</td>
                        <td className="text-center">
                          <Link to={`/week2/${note._id}`}>
                            <FaRegEdit size={25} style={{ color: "white" }} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Link to="/week2dash">
            <button className="report-btn">Generate Week 2 Report</button>
          </Link>
        </Col>
        <br />
        <br />
        <Col lg="10" md="12">
          <Card className="custom-card">
            <CardHeader>
              <CardTitle
                tag="h2"
                className="poppins"
                style={{ color: "white" }}
              >
                Week 3
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive hover>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Adm Num</th>
                    <th>Intro</th>
                    <th>Projects</th>
                    <th>Skills</th>
                    <th>Extra</th>
                    <th>Intern</th>
                    <th className="text-center">Profile</th>
                    <th className="text-center">Remarks</th>
                    <th className="text-center">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {notes &&
                    notes.map((note) => (
                      <tr key={note._id}>
                        <td>{note.name}</td>
                        <td>{note.roll}</td>
                        <td>{note.w3intro}/5</td>
                        <td>{note.w3project}/5</td>
                        <td>{note.w3skills}/5</td>
                        <td>{note.w3extra}/5</td>
                        <td>{note.w3intern}/5</td>
                        <td className="text-center">{note.w3profile}/5</td>
                        <td style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{note.w3comments}</td>
                        <td className="text-center">
                          <Link to={`/week3/${note._id}`}>
                            <FaRegEdit size={25} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Link to="/week3dash">
            <button className="report-btn">Generate Week 3 Report</button>
          </Link>
        </Col>
        <br />
        <br />
        <Col lg="10" md="12">
          <Card className="custom-card">
            <CardHeader>
              <CardTitle
                tag="h2"
                className="poppins"
                style={{ color: "white" }}
              >
                Week 4
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive hover>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Adm Num</th>
                    <th>Intro</th>
                    <th>Projects</th>
                    <th>Skills</th>
                    <th>Extra</th>
                    <th>Intern</th>
                    <th className="text-center">Profile</th>
                    <th className="text-center">Remarks</th>
                    <th className="text-center">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {notes &&
                    notes.map((note) => (
                      <tr key={note._id}>
                        <td>{note.name}</td>
                        <td>{note.roll}</td>
                        <td>{note.w4intro}/5</td>
                        <td>{note.w4project}/5</td>
                        <td>{note.w4skills}/5</td>
                        <td>{note.w4extra}/5</td>
                        <td>{note.w4intern}/5</td>
                        <td className="text-center">{note.w4profile}/5</td>
                        <td style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{note.w4comments}</td>
                        <td className="text-center">
                          <Link to={`/week4/${note._id}`}>
                            <FaRegEdit size={25} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Link to="/week4dash">
            <button className="report-btn">Generate Week 4 Report</button>
          </Link>
        </Col>
        <br />
        <br />
      </MainScreen>
    </div>
  );
}

export default MyNotes;
