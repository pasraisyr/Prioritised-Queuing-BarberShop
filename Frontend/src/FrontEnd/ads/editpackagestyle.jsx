import React, { useState, useEffect } from 'react';
import './commonPage.css';
import { basicHaircut, haircutBeardTrim, deluxeGroom } from "../../assets/images";

const initialPackageStyles = [
  {
    id: '1',
    name: 'Basic Haircut',
    imageUrl: basicHaircut,
    description: 'A classic haircut that keeps it simple and stylish. Perfect for a clean and professional look.',
  },
  {
    id: '2',
    name: 'Haircut + Beard Trim',
    imageUrl: haircutBeardTrim,
    description: 'Get your haircut and beard perfectly groomed in one go. Ideal for maintaining a sharp, well-kept appearance.',
  },
  {
    id: '3',
    name: 'Deluxe Grooming Package',
    imageUrl: deluxeGroom,
    description: 'An all-in-one grooming experience that includes a haircut, beard trim, and luxury treatment for the ultimate look.',
  },
];

const EditPackageStyle = () => {
  const [packages, setPackages] = useState(initialPackageStyles);
  const [newPackage, setNewPackage] = useState({ name: '', imageUrl: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8082/api/packages')
      .then(response => response.json())
      .then(data => setPackages(data))
      .catch(error => console.error('Error fetching packages:', error));
  }, []);

  const handleAdd = () => {
    fetch('http://localhost:8082/api/packages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPackage),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New package added:', data);
        setPackages([...packages, data]);
        setNewPackage({ name: '', imageUrl: '', description: '' });
      })
      .catch(error => console.error('Error adding package:', error));
  };

  const handleEdit = (pkg) => {
    setEditingId(pkg.id);
    setNewPackage({ name: pkg.name, imageUrl: pkg.imageUrl, description: pkg.description });
  };

  const handleSaveEdit = () => {
    fetch(`http://localhost:8082/api/packages/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPackage),
    })
      .then(response => response.json())
      .then(data => {
        const updatedPackages = packages.map(pkg =>
          pkg.id === editingId ? data : pkg
        );
        setPackages(updatedPackages);
        setEditingId(null);
        setNewPackage({ name: '', imageUrl: '', description: '' });
      })
      .catch(error => console.error('Error editing package:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8082/api/packages/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPackages(packages.filter(pkg => pkg.id !== id));
      })
      .catch(error => console.error('Error deleting package:', error));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPackage({ ...newPackage, imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-page">
      <h1 className="pageTitle">PACKAGES</h1>
      <table className="packageStyleTable"></table>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td>{pkg.name}</td>
              <td><img src={pkg.imageUrl} alt={pkg.name} /></td>
              <td>{pkg.description}</td>
              <td>
                <button onClick={() => handleEdit(pkg)}>Edit</button>
                <button onClick={() => handleDelete(pkg.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                value={newPackage.name}
                onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                placeholder="Name"
                className="custom-input"
              />
            </td>
            <td>
              <input type="file" onChange={handleImageUpload} />
              {newPackage.imageUrl && <img src={newPackage.imageUrl} alt="New Package" />}
            </td>
            <td>
              <input
                type="text"
                value={newPackage.description}
                onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
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

export default EditPackageStyle;
 