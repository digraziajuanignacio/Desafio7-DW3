import React, { useState } from 'react';

const UserForm = ({ addUser }) =>{
const [name, setName] = useState(''); 
const [email, setEmail] = useState('');

const handleSubmit = () => {
// Validar datos antes de agregar
const newUser = { name, email };
// Llamar a la función desde las props para agregar usuario
addUser(newUser);
};

return (
<div>
<h2>Agregar Usuario</h2>
<div className='edit'>
<label for="exampleInputEmail1" className="form-label">Nombre: </label>
<input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text" value={name} onChange={(e) => setName(e.target.value)} />
<br />
<label for="exampleInputEmail1" className="form-label">Email: </label>
<input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
<br />
<button type="button" className="btn btn-success" onClick={handleSubmit}>Agregar</button>
</div>
</div>
);
};

export default UserForm;