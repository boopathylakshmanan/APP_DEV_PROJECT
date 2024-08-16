import React, { useState } from 'react';
import './FileSharing.css';

const FileSharing = () => {
  const [files, setFiles] = useState([]);
  const [fileToUpload, setFileToUpload] = useState(null);

  const handleFileChange = (e) => {
    setFileToUpload(e.target.files[0]);
  };

  const handleUpload = () => {
    if (fileToUpload) {
      const newFile = {
        name: fileToUpload.name,
        size: fileToUpload.size,
        uploader: 'John Doe', // Replace with actual user
        uploadDate: new Date().toLocaleDateString(),
      };
      setFiles([...files, newFile]);
      setFileToUpload(null);
    }
  };

  const handleDelete = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  return (
    <div className="file-sharing-container">
      <h2>File Sharing</h2>
      <p>This is the file sharing page. Here, users can upload and share files with others.</p>
      
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!fileToUpload}>
          Upload
        </button>
      </div>
      
      <div className="file-list-section">
        <h3>Uploaded Files</h3>
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Uploader</th>
              <th>Upload Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.name}>
                <td>{file.name}</td>
                <td>{file.uploader}</td>
                <td>{file.uploadDate}</td>
                <td>
                  <button onClick={() => alert('Downloading ' + file.name)}>Download</button>
                  <button onClick={() => handleDelete(file.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileSharing;