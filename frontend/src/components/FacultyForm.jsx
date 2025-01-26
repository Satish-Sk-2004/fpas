import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyPerformanceForm = ({ user }) => {
    console.log("userid",user._id)
  const [formData, setFormData] = useState({
    skillsets: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/getdata/${user._id}`);
        console.log('Fetched data:', response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user._id]);

  const handleChange = (e, key, field) => {
    setFormData((prev) => ({
      ...prev,
      skillsets: {
        ...prev.skillsets,
        [key]: {
          ...prev.skillsets[key],
          [field]: e.target.value,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/postdata', { userid, ...formData });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred while submitting the form.');
    }
  };


  const skillsetFields = [
    { name: "Strength in basic and fundamental knowledge of courses taught/domain area", key: "basicKnowledge" },
    { name: "1.1 Strengthening the knowledge through online courses", key: "strengthenKnowledge" },
    { name: "2. Continuous updating of knowledge", key: "updateKnowledge" },
    { name: "2.1 Attending FDP/workshops/seminars etc.", key: "attendFDP" },
    { name: "3. Updating the skills by attending industrial know-how program", key: "industrialKnowHow" },
    { name: "3.1 No. of Industrial Internship undergone per year in their area of specialization", key: "industrialInternship" },
    { name: "4. Involvement in teaching-learning process by practicing innovative methods", key: "innovativeMethods" },
    { name: "4.1 Course file (Based on academic auditing)", key: "courseFile" },
    { name: "5. Ability to identify slow performers and guide them", key: "identifySlowPerformers" },
    { name: "5.1 No. of slow learners improved", key: "slowLearnersImproved" },
    { name: "6. Capability of converting the students' mini-projects into outcomes", key: "miniProjects" },
    { name: "6.1 Projects/product development activities", key: "projectDevelopment" },
    { name: "6.2 Publications", key: "publications" },
    { name: "7. Academic Results (Average pass % of the course handling)", key: "academicResults" },
    { name: "7.1 Theory", key: "theoryResults" },
    { name: "7.2 Laboratory", key: "labResults" },
    { name: "8. Should register with Ph.D. and progress in research work", key: "phdProgress" },
    { name: "8.1 Ph.D. Registration", key: "phdRegistration" },
  ];

  return (
    <form onSubmit={handleSubmit} className="p-4 grid gap-6">
      {skillsetFields.map((field, index) => (
        <div key={index} className="flex items-center gap-4">
          <label className="w-1/3" htmlFor={field.key}>{field.name}</label>
          <input
            className="border p-2 w-20 text-center"
            type="number"
            id={`${field.key}-performanceRating`}
            name="performanceRating"
            placeholder="Rating"
            value={formData.skillsets[field.key]?.performanceRating || ''}
            onChange={(e) => handleChange(e, field.key, 'performanceRating')}
          />
          <input
            className="border p-2 w-16 text-center"
            type="number"
            id={`${field.key}-score`}
            name="score"
            placeholder="Score"
            value={formData.skillsets[field.key]?.score || ''}
            onChange={(e) => handleChange(e, field.key, 'score')}
          />
          <textarea
            className="border p-2 flex-1"
            id={`${field.key}-evidence`}
            name="evidence"
            placeholder="Evidence Details"
            value={formData.skillsets[field.key]?.evidence || ''}
            onChange={(e) => handleChange(e, field.key, 'evidence')}
          />
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Submit</button>
    </form>
  );
};

export default FacultyPerformanceForm;
