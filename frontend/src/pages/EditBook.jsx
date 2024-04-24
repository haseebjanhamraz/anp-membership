import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import Nav from "../components/partials/Nav";

const EditBook = () => {
  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [imagePath, setImagePath] = useState(null);
  const [status, setStatus] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/books/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const {
          serial,
          name,
          fatherName,
          district,
          address,
          contactNumber,
          email,
          nicNumber,
          status,
        } = res.data;
        setSerial(serial);
        setName(name);
        setFatherName(fatherName);
        setDistrict(district);
        setAddress(address);
        setContactNumber(contactNumber);
        setEmail(email);
        setNicNumber(nicNumber);
        setStatus(status);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        enqueueSnackbar("An error occurred. Please check the console.", {
          variant: "error",
        });
      });
  }, [id, enqueueSnackbar]);

  const handleEditBook = () => {
    setLoading(true);
    const data = new FormData();
    data.append("serial", serial);
    data.append("name", name);
    data.append("fatherName", fatherName);
    data.append("district", district);
    data.append("address", address);
    data.append("contactNumber", contactNumber);
    data.append("email", email);
    data.append("nicNumber", nicNumber);
    data.append("status", status);
    if (imagePath) {
      data.append("image", imagePath);
    }

    axios
      .put(`http://localhost:8080/books/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Member Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        enqueueSnackbar("Error editing member", { variant: "error" });
      });
  };

  return (
    <>
      <Nav />
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Edit Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4 ">
            <label className="text-xl mr-4 text-grey-500 ">Serial#</label>
            <input
              type="number"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>
          <div className="my-4 ">
            <label className="text-xl mr-4 text-grey-500 ">Name</label>
            <input
              type="text"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-4 ">
            <label className="text-xl mr-4 text-grey-500 ">Father Name</label>
            <input
              type="text"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500">District</label>
            <select
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="Abbottabad">Abbottabad</option>{" "}
              <option value="Bajaur">Bajaur</option>{" "}
              <option value="Bannu">Bannu</option>{" "}
              <option value="Battagram">Battagram</option>{" "}
              <option value="Buner">Buner</option>{" "}
              <option value="Charsadda">Charsadda</option>{" "}
              <option value="Chitral Lower">Chitral Lower</option>{" "}
              <option value="Chitral Upper">Chitral Upper</option>{" "}
              <option value="Dera ismail khan">Dera ismail khan</option>{" "}
              <option value="Hangu">Hangu</option>{" "}
              <option value="Haripur">Haripur</option>{" "}
              <option value="Karak">Karak</option>{" "}
              <option value="Kohat">Kohat</option>{" "}
              <option value="Lakki Marwat">Lakki Marwat</option>{" "}
              <option value="Lower Dir">Lower Dir</option>{" "}
              <option value="Lower Kohistan">Lower Kohistan</option>{" "}
              <option value="Malakand">Malakand</option>{" "}
              <option value="Mansehra">Mansehra</option>{" "}
              <option value="Mardan">Mardan</option>{" "}
              <option value="Nowshehra">Nowshehra</option>{" "}
              <option value="Peshawar">Peshawar</option>{" "}
              <option value="Shangla">Shangla</option>{" "}
              <option value="Swabi">Swabi</option>{" "}
              <option value="Swat">Swat</option>{" "}
              <option value="Tank">Tank</option>{" "}
              <option value="Torghar">Torghar</option>{" "}
              <option value="Upper Dir">Upper Dir</option>{" "}
              <option value="Upper Kohistan">Upper Kohistan</option>{" "}
              <option value="Upper Kohistan">Upper Kohistan</option>{" "}
              <option value="South Waziristan">South Waziristan</option>{" "}
              <option value="North Waziristan">North Waziristan</option>{" "}
              <option value="Orakzai">Orakzai</option>{" "}
              <option value="Mohmand">Mohmand</option>{" "}
              <option value="Kurram">Kurram</option>{" "}
              <option value="Kolai Palas">Kolai Palas</option>{" "}
              <option value="Upper Kohistan">Upper Kohistan</option>{" "}
              <option value="Lower Kohistan">Lower Kohistan</option>{" "}
              <option value="Khyber">Khyber</option>
            </select>
          </div>

          <div className="my-4 ">
            <label className="text-xl mr-4 text-grey-500 ">Address</label>
            <input
              type="text"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="my-4 ">
            <label className="text-xl mr-4 text-grey-500 ">
              Contact Number
            </label>
            <input
              type="number"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <div className="my-4 ">
              <label className="text-xl mr-4 text-grey-500 ">
                Email Address
              </label>
              <input
                type="text"
                className="border-2 border-grey-500 px-4 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4 ">
              <label className="text-xl mr-4 text-grey-500 ">NIC#</label>
              <input
                type="number"
                className="border-2 border-grey-500 px-4 py-2 w-full"
                value={nicNumber}
                onChange={(e) => setNicNumber(e.target.value)}
              />
            </div>
            <div className="my-4 ">
              <label className="text-xl mr-4 text-grey-500 ">Image</label>
              <input
                type="file"
                className="border-2 border-grey-500 px-4 py-2 w-full"
                onChange={(e) => setImagePath(e.target.files[0])} // Update imagePath with selected file
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full my-8">
              <h1 className="text-2xl font-bold text-gray-500">
                Membership Status
              </h1>
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="toggle"
                  value={isChecked}
                  className="sr-only peer"
                  checked={isChecked} // Bind the checked state to the isChecked state
                  onChange={handleCheckboxChange} // Handle checkbox change event
                />
                <div className="block relative bg-red-900 w-16 h-9 p-1 rounded-full before:absolute before:bg-red-600 before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
              </label>
              {/* Display the value of isChecked */}
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBook;
