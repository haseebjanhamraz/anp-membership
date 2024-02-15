import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";
import Nav from "../components/partials/Nav";

const EditBook = () => {
  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [imagePath, setImagePath] = useState(null); // Change imagePath initial state to null
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        setSerial(res.data.serial);
        setName(res.data.name);
        setFatherName(res.data.fatherName);
        setAddress(res.data.address);
        setContactNumber(res.data.contactNumber);
        setEmail(res.data.email);
        setNicNumber(res.data.nicNumber);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("An error happened, Please check the console");
      });
  }, []);

  const handleEditBook = () => {
    setLoading(true);
    const data = new FormData(); // Create a FormData object
    data.append("serial", serial);
    data.append("name", name);
    data.append("fatherName", fatherName);
    data.append("address", address);
    data.append("contactNumber", contactNumber);
    data.append("email", email);
    data.append("nicNumber", nicNumber);
    data.append("image", imagePath); // Append the selected file to FormData

    axios
      .put(`http://localhost:8080/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Member Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        enqueueSnackbar("Error", { variant: "error" });
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
