import React, { useState, useEffect } from 'react';
// import './commonPage.css';
import '../ads/commonPage.css';
import { pompadour, undercut, buzzCut } from "../../assets/images";

const initialHairStyles = [
  {
    id: '1',
    name: "Classic Pompadour",
    imageUrl: pompadour,
    description: "A timeless style with volume and slicked-back elegance, perfect for formal occasions."
  },
  {
    id: '2',
    name: "Buzz Cut",
    imageUrl: buzzCut,
    description: "A low-maintenance, sharp cut that emphasizes facial features. Ideal for an easy-going, clean look."
  },
  {
    id: '3',
    name: "Undercut",
    imageUrl: undercut,
    description: "A trendy, modern style with short sides and longer top, offering a bold contrast."
  },
];

const EditHairStyle= () => {
  const [hairstyles, setHairstyles] = useState(initialHairStyles);
  const [newHairstyle, setNewHairstyle] = useState({ name: '', imageUrl: '', description: '' });
  const [editingId, setEditingId] = useState(null); // State to track the ID of the hairstyle being edited

  useEffect(() => {
    fetch('http://localhost:8082/api/hairstyles')
      .then(response => response.json())
      .then(data => setHairstyles(data))
      .catch(error => console.error('Error fetching hairstyles:', error));
  }, []);

  const handleAdd = () => {
    fetch('http://localhost:8082/api/hairstyles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHairstyle),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New hairstyle added:', data);
        setHairstyles([...hairstyles, data]); // Update state with new hairstyle
        setNewHairstyle({ name: '', imageUrl: '', description: '' });
      })
      .catch(error => console.error('Error adding hairstyle:', error));
  };

  const handleEdit = (hs) => {
    setEditingId(hs.id); // Set the current hairstyle to be edited
    setNewHairstyle({ name: hs.name, imageUrl: hs.imageUrl, description: hs.description });
  };

  const handleSaveEdit = () => {
    fetch(`http://localhost:8082/api/hairstyles/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHairstyle),
    })
      .then(response => response.json())
      .then(data => {
        const updatedHairstyles = hairstyles.map(hs =>
          hs.id === editingId ? data : hs
        );
        setHairstyles(updatedHairstyles);
        setEditingId(null); // Reset editing state
        setNewHairstyle({ name: '', imageUrl: '', description: '' });
      })
      .catch(error => console.error('Error editing hairstyle:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8082/api/hairstyles/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setHairstyles(hairstyles.filter(hs => hs.id !== id));
      })
      .catch(error => console.error('Error deleting hairstyle:', error));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewHairstyle({ ...newHairstyle, imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-page">
        <h1 className="pageTitle">HAIRSTYLES</h1>
      <table className="hairStyleTable">
      <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hairstyles.map((hs) => (
            <tr key={hs.id}>
              <td>{hs.name}</td>
              <td><img src={hs.imageUrl} alt={hs.name} /></td>
              <td>{hs.description}</td>
              <td>
                <button onClick={() => handleEdit(hs)}>Edit</button>
                <button onClick={() => handleDelete(hs.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                value={newHairstyle.name}
                onChange={(e) => setNewHairstyle({ ...newHairstyle, name: e.target.value })}
                placeholder="Name"
                className="custom-input"
              />
            </td>
            <td>
              <input type="file" onChange={handleImageUpload} />
              {newHairstyle.imageUrl && <img src={newHairstyle.imageUrl} alt="New Hairstyle" />}
            </td>
            <td>
              <input
                type="text"
                value={newHairstyle.description}
                onChange={(e) => setNewHairstyle({ ...newHairstyle, description: e.target.value })}
                placeholder="Description"
                className="custom-input"
              />
            </td>
            <td>
              {editingId ? (
                <button onClick={handleSaveEdit}>Save</button>
              ) : (
                <button onClick={handleAdd}>Add</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button-container">
        <button className="back-button" onClick={() => window.location.href = '/dashboard-staff'}>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default EditHairStyle;
