import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../services/token.service";
import useFetchState from "../../util/useFetchState";
import getErrorModal from "../../util/getErrorModal";
import "../../static/css/admin/adminPage.css";
import { useNavigate } from "react-router-dom";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function PetHotelRoomsList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [petHotelRooms, setPetHotelRooms] = useFetchState(
    [],
    `/api/v1/petHotelRooms?userId=${user.id}`,
    jwt,
    setMessage,
    setVisible
  );
  const [alerts, setAlerts] = useState([]);

  const navigator = useNavigate();

  const petHotelRoomsList =
    petHotelRooms.map((petHotelRoom) => {
        return (
          <tr key={petHotelRoom.id}>
            <td className="text-center">{petHotelRoom.name}</td>
            <td className="text-center">{petHotelRoom.type.name}</td>
            <td className="text-center">{petHotelRoom.clinic.name}</td>
            <td className="text-center">{petHotelRoom.size}</td>
            <td className="text-center">
              <ButtonGroup>
                <Button
                  size="sm"
                  color="primary"
                  aria-label={"edit-" + petHotelRoom.name}
                  tag={Link}
                  to={"/petHotelRooms/" + petHotelRoom.id}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  aria-label={"delete-" + petHotelRoom.name}
                  onClick={() => {
                    let confirmMessage = window.confirm("Are you sure you want to delete it?");

                    if(!confirmMessage) return;

                    fetch(`/api/v1/petHotelRooms/${petHotelRoom.id}`, {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                      },
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          setMessage("PetHotelRoom deleted successfully");
                          setVisible(true);
                          navigator(0);
                        }
                      })
                      .catch((err) => {
                        setMessage(err.message);
                        setVisible(true);
                      });
                  }}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        );
      });


  const modal = getErrorModal(setVisible, visible, message);

  return (
      <div>
        <div className="admin-page-container">
          <h1 className="text-center">My PetHotelRooms</h1>
          {alerts.map((a) => a.alert)}
          {modal}
          <div className="float-right">
            <Button color="success" tag={Link} to="/petHotelRooms/new">
              Add PetHotelRoom
            </Button>
          </div>
          <div>
            <Table aria-label="petHotelRooms" className="mt-4">
              <thead>
                <tr>
                <th style={{ backgroundColor: '#d3ac78', width:"15%", className:"text-center" }}>Name</th>
                <th style={{ backgroundColor: '#d3ac78', width:"15%", className:"text-center" }}>Type</th>
                <th style={{ backgroundColor: '#d3ac78', width:"15%", className:"text-center" }}>Clinic</th>
                <th style={{ backgroundColor: '#d3ac78', width:"15%", className:"text-center" }}>Size</th>
                <th style={{ backgroundColor: '#d3ac78', width:"30%", className:"text-center" }}>Actions</th>
                </tr>
              </thead>
              <tbody>{petHotelRoomsList}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
}
