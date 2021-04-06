import React, {useState} from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        backgroundColor: '',
        width: '', 
        height: '',
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">backgroundColor: </label>
            <input 
              id="backgroundColor"
              type="text"
              name="backgroundColor"
              placeholder="background color"
              value={formData.backgroundColor}
              onChange={handleChange}
            />
            <label htmlFor="width">width: </label>
            <input 
              id="width"
              type="text"
              name="width"
              placeholder="width"
              value={formData.width}
              onChange={handleChange}
            />
            <label htmlFor="height">height: </label>
            <input 
              id="height"
              type="text"
              name="height"
              placeholder="height"
              value={formData.height}
              onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;