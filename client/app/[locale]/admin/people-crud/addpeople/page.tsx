"use client";
import { useState } from "react";

export default function PeopleForm() {
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    e_title: "",
    name: "",
    e_name: "",
    tel: "",
    email: "",
    position: "",
    e_position: "",
    affiliation: "",
    e_affiliation: "",
    picture: "",
    job_type: "",
    e_id: "",
    personal_web: "",
    research_interest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/people", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Data sent successfully");
        setIsSuccess(true);
        // Optionally, you can redirect the user to a success page or handle other actions here.
      } else {
        setSubmitMessage("Error sending data");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("An error occurred while sending data");
      setIsSuccess(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for each data field */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="e_title"
          placeholder="E_Title"
          value={formData.e_title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="e_name"
          placeholder="E_Name"
          value={formData.e_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tel"
          placeholder="Tel"
          value={formData.tel}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          name="e_position"
          placeholder="E_Position"
          value={formData.e_position}
          onChange={handleChange}
        />
        <input
          type="text"
          name="affiliation"
          placeholder="Affiliation"
          value={formData.affiliation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="e_affiliation"
          placeholder="E_Affiliation"
          value={formData.e_affiliation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="picture"
          placeholder="Picture"
          value={formData.picture}
          onChange={handleChange}
        />
        <input
          type="text"
          name="job_type"
          placeholder="Job_Type"
          value={formData.job_type}
          onChange={handleChange}
        />
        <input
          type="text"
          name="e_id"
          placeholder="E_ID"
          value={formData.e_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="personal_web"
          placeholder="Personal_Web"
          value={formData.personal_web}
          onChange={handleChange}
        />
        <input
          type="text"
          name="research_interest"
          placeholder="Research_Interest"
          value={formData.research_interest}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {submitMessage && (
        <div className={isSuccess ? "success" : "error"}>{submitMessage}</div>
      )}
    </div>
  );
}
