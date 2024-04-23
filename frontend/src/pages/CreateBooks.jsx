import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Nav from "../components/partials/Nav";

const CreateBook = () => {
  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [image, setImage] = useState(null); // Add state for the image
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the value of isChecked when the checkbox is clicked
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Set the selected image file to the state
  };

  const handleSaveBook = () => {
    const formData = new FormData(); // Create FormData object to send both text and file data
    formData.append("serial", serial);
    formData.append("name", name);
    formData.append("fatherName", fatherName);
    formData.append("address", address);
    formData.append("district", district);
    formData.append("contactNumber", contactNumber);
    formData.append("email", email);
    formData.append("nicNumber", nicNumber);
    formData.append("status", isChecked);
    formData.append("image", image);

    setLoading(true);
    axios
      .post("http://localhost:8080/books", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Member Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened, Please check the console");
        enqueueSnackbar("Error", { variant: "error" });
      });
  };

  return (
    <>
      <Nav />
      <div className="p-4">
        <BackButton className="hidden" />
        <h1 className="text-3xl my-4">Create Member</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500 ">Serial#</label>
            <input
              type="number"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={serial}
              maxLength={6}
              placeholder="Serial from copy: 000123"
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>
          <div className="my-4 ">
            <label className="text-xl mr-4 text-grey-500 ">Name</label>
            <input
              type="text"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={name}
              maxLength={25}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-4 ">
            <label className="text-xl mr-4 text-grey-500 ">Father Name</label>
            <input
              type="text"
              className="border-2 border-grey-500 px-4 py-2 w-full"
              value={fatherName}
              maxLength={25}
              placeholder="Father Name"
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
              placeholder="Enter permanent address"
              maxLength={80}
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
              placeholder="03335806268"
              maxLength={11}
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
                placeholder="example@gmail.com"
                maxLength={30}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4 ">
              <label className="text-xl mr-4 text-grey-500 ">NIC#</label>
              <input
                type="number"
                className="border-2 border-grey-500 px-4 py-2 w-full"
                value={nicNumber}
                placeholder="1710111122332"
                maxLength={13}
                onChange={(e) => setNicNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500 ">Member Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border-2 border-grey-500 px-4 py-2"
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

          <button className="p-2 bg-red-300 m-8" onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBook;
