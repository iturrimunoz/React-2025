import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormLogin = ({ titleForm }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case 'module':
            dispatch(updateModule(value));
            break;
          case 'username':
            dispatch(updateUsername(value));
            break;
          case 'email':
            dispatch(updateEmail(value));
            break;
          case 'password':
            dispatch(updatePassword(value));
            break;
          default:
            break;
        }
      };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label>
                        Username:
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default FormLogin;