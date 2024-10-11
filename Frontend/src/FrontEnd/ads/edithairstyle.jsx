import React, { useState, useEffect } from 'react';
import './EditStylePage.css';
import { fade, manBun, pompadour, undercut, buzzCut } from "../../assets/images";

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
  {
    id: '4',
    name: "Fade",
    imageUrl: fade,
    description: "Smoothly tapered from the sides to the skin, this haircut is great for a fresh, modern vibe."
  },
  {
    id: '5',
    name: "Man Bun",
    imageUrl: manBun,
    description: "A longer style where hair is pulled into a bun. It offers a relaxed yet stylish appearance."
  }
];

const EditStylePage = () => {
  const [hairstyles, setHairstyles] = useState(initialHairStyles);
  const [newHairstyle, setNewHairstyle] = useState({ name: '', imageUrl: '', description: '' });

  useEffect(() => {
    // Fetch initial data from the server
    fetch('/hairstyles')
      .then(response => response.json())
      .then(data => setHairstyles(data))
      .catch(error => console.error('Error fetching hairstyles:', error));
  }, []);

  const handleAdd = () => {
    // Add new hairstyle to the database
    fetch('/hairstyles', {
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

  const handleEdit = (id) => {
    // Edit hairstyle in the database
    fetch(`/hairstyles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHairstyle),
    })
      .then(response => response.json())
      .then(data => {
        const updatedHairstyles = hairstyles.map(hairstyle =>
          hairstyle.id === id ? data : hairstyle
        );
        setHairstyles(updatedHairstyles);
      })
      .catch(error => console.error('Error editing hairstyle:', error));
  };

  const handleDelete = (id) => {
    // Delete hairstyle from the database
    fetch(`/hairstyles/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setHairstyles(hairstyles.filter(hairstyle => hairstyle.id !== id));
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
    <div className="edit-style-page">
      <h1>Edit Hairstyles</h1>
      <table className="edit-style-page__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hairstyles.map((hairstyle) => (
            <tr key={hairstyle.id}>
              <td>{hairstyle.name}</td>
              <td><img src={hairstyle.imageUrl} alt={hairstyle.name} /></td>
              <td>{hairstyle.description}</td>
              <td>
                <button onClick={() => handleEdit(hairstyle.id)}>Edit</button>
                <button onClick={() => handleDelete(hairstyle.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><input type="text" value={newHairstyle.name} onChange={(e) => setNewHairstyle({ ...newHairstyle, name: e.target.value })} placeholder="Name" /></td>
            <td>
              <input type="file" onChange={handleImageUpload} />
              {newHairstyle.imageUrl && <img src={newHairstyle.imageUrl} alt="New Hairstyle" />}
            </td>
            <td><input type="text" value={newHairstyle.description} onChange={(e) => setNewHairstyle({ ...newHairstyle, description: e.target.value })} placeholder="Description" /></td>
            <td><button onClick={handleAdd}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditStylePage;
