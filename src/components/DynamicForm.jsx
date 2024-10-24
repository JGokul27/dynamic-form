import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleAddField = () => {
    const newFields = [...fields, { value: '' }];
    setFields(newFields);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', fields);
  };

  return (
    <div className='container'>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Field ${index + 1}`}
              value={field.value}
              onChange={(e) => handleChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
