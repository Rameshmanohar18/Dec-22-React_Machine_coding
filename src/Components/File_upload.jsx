

import { useState } from "react";
  
function FileUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus("");
  };

  const onUpload = async () => {  
    if (!file) {
      setStatus("Please select a file first");
      return;
    }   

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    setStatus("Uploading...");

    try {
      const response = await fetch(
        "https://your-api-endpoint.com/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }
      const result = await response.json();
      setStatus(`Upload successful: ${result.message || file.name}`);
    } catch (error) {
      setStatus(`Upload error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Upload File</h2>

        <label style={styles.fileLabel}>
          Choose File
          <input
            type="file"
            onChange={onFileChange}
            style={styles.hiddenInput}
          />
        </label>

        {file && <p style={styles.fileName}>{file.name}</p>}

        <button
          onClick={onUpload}
          disabled={loading}
          style={{
            ...styles.button,
            backgroundColor: loading ? "#999" : "#4CAF50",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  fileLabel: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  hiddenInput: {
    display: "none",
  },
  fileName: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 25px",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
    transition: "0.3s",
  },
  status: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#333",
  },
};

export default FileUpload;