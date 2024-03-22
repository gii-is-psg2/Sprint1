import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import tokenService from "../../services/token.service";
import "../../static/css/admin/adminPage.css";
import "../../static/css/owner/consultations.css";
import getErrorModal from "../../util/getErrorModal";
import getIdFromUrl from "../../util/getIdFromUrl";
import useFetchData from "../../util/useFetchData";
import useFetchState from "../../util/useFetchState";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function EditPetRoom() {
  const emptyItem = {
    id: null,
    name: "",
    size: null,
    type: null,
    clinic: null,
  };
  const id = getIdFromUrl(2);
  const userId = tokenService.getUser().id;
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  const [petRoom, setPetRoom] = useFetchState(
    emptyItem,
    `/api/v1/petHotelRooms/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );


  const [types, setType] = useFetchState(
    [],
    `/api/v1/pets/types`,
    jwt,
    setMessage,
    setVisible
  );

   const [clinics, setClinic] = useFetchState(
      [],
      `/api/v1/clinics?userId=${user.id}`,
      jwt,
      setMessage,
      setVisible
    );

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === "type") {
      const type = types.find((type) => type.id === Number(value));
      setPetRoom({ ...petRoom, type: type });
    } else if(name === "clinic") {
       const clinic = clinics.find((clinic) => clinic.id === Number(value));
       console.log(clinic)
       setPetRoom({ ...petRoom, clinic: clinic });
    } else  {
      setPetRoom({ ...petRoom, [name]: value });
    }
 }

  function handleSubmit(event) {
    event.preventDefault();

    fetch(
      "/api/v1/petHotelRooms" + (petRoom.id ? "/" + petRoom.id : ""),
      {
        method: petRoom.id ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petRoom),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.message) {
          setMessage(json.message);
          setVisible(true);
        } else window.location.href = "/petHotelRooms";
      })
      .catch((message) => alert(message));
  }

  const modal = getErrorModal(setVisible, visible, message);

  const petTypeOptions = types.map((type) => (
    <option key={type.id} value={type.id}>
      {type.name}
    </option>
  ));

   const clinicOption = clinics.map((clinic) => (
      <option key={clinic.id} value={clinic.id}>
        {clinic.name}
      </option>
    ));

  return (
    <div className="auth-page-container">
      {<h2>{id !== "new" ? "Edit Pet Room" : "Add Pet Room"}</h2>}
      {modal}
      <div className="auth-form-container">
        <Form onSubmit={handleSubmit}>
          <div className="custom-form-input">
            <Label for="title" className="custom-form-input-label">
              Title
            </Label>
            <Input
              type="text"
              required
              name="name"
              id="name"
              value={petRoom.name || ""}
              onChange={handleChange}
              className="custom-input"
            />
          </div>
          <div className="custom-form-input">
            <Label for="type" className="custom-form-input-label">
              Type
            </Label>
            {petRoom.id ? (
              <Input
                type="select"
                disabled
                name="type"
                id="type"
                value={petRoom.type?.id || ""}
                onChange={handleChange}
                className="custom-input"
              >
                <option value="">None</option>
                {petTypeOptions}
              </Input>
            ) : (
              <Input
                type="select"
                required
                name="type"
                id="type"
                value={petRoom.type?.id || ""}
                onChange={handleChange}
                className="custom-input"
              >
                <option value="">None</option>
                {petTypeOptions}
              </Input>
            )}
          </div>
          <div className="custom-form-input">
            <Label for="clinic" className="custom-form-input-label">
                 Clinic
             </Label>
            {petRoom.id ? (
                <Input
                 type="select"
                 required
                 name="clinic"
                 id="clinic"
                 value={petRoom.clinic?.id || ""}
                 onChange={handleChange}
                 className="custom-input"
                 >
                  <option value="">None</option>
                    {clinicOption}
                     </Input>
                  ) : (
                    <Input
                     type="select"
                      required
                      name="clinic"
                      id="clinic"
                      value={petRoom.clinic?.id || ""}
                      onChange={handleChange}
                      className="custom-input"
                      >
                      <option value="">None</option>
                      {clinicOption}
                      </Input>
                 )}
          </div>
          <div className="custom-form-input">
            <Label for="size" className="custom-form-input-label">
              Size
            </Label>
            <Input
              type="text"
              required
              name="size"
              id="size"
              value={petRoom.size || ""}
              onChange={handleChange}
              className="custom-input"
            />
          </div>
          <div className="custom-button-row">
            <button className="auth-button">Save</button>
            <Link
              to={`/petHotelRooms`}
              className="auth-button"
              style={{ textDecoration: "none" }}
            >
              Cancel
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
