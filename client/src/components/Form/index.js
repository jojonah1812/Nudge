import React from "react";

function Form(q, {handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Positions</strong>
        </label>
        <input
          className="form-control"
          id="Position"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Submit
        </button>
        <button
          onClick={handleFormSubmit}
          type="delete"
          className="btn btn-lg btn-danger float-right"
        >
         Delete
        </button>   
      </div>
    </form>
  );
}

export default Form;
