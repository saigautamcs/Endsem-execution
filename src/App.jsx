
import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Details</h1>

      <form>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          style={styles.input}
        />

        <label style={styles.label}>Course Code:</label>
        <input
          type="text"
          placeholder="Enter course code"
          style={styles.input}
        />

        <label style={styles.label}>Roll Number:</label>
        <input
          type="text"
          placeholder="Enter roll number"
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "25px",
    border: "1px solid gray",
    borderRadius: "10px",
    fontFamily: "Arial",
    boxSizing: "border-box",
  },

  heading: {
    textAlign: "center",
    marginTop: "0",
    marginBottom: "30px",
    fontSize: "26px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    marginTop: "15px",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid gray",
    borderRadius: "5px",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;
