import React, { useState } from 'react';
 import UserForm from '../Components/UserForm'; 
import UserList from '../Components/UserList'; 
import './CSS/home.css'

const App = () => { const [users, setUsers] = useState([]); 
const addUser = async (newUser) => { 

// Agregar nuevo usuario al estado 
try { 
const response = await fetch('https://664e3a10fafad45dfadf71d5.mockapi.io/users', { 
method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 }, body: JSON.stringify(newUser), });
 if (response.ok) {

 // Obtener la respuesta y agregar usuario al estado const data = await response.json();
 setUsers([...users, data]); 
} else { 
console.error('Error al agregar usuario');
}} catch (error) { 
console.error('Error en la solicitud: ', error);
 }
 }; 
return ( 
<div className="principal">
 <h1>Lista de Usuarios</h1>
 <UserForm addUser={addUser} /> 
{/* Mostrar lista de usuarios /} 
{/ <ul> 
{users.map((user, index) => ( 
<li key={index}>{user.name} - {user.email}</li> 
))}
 </ul> */}
 <UserList />
 </div>
 ); 
}; 
export default App;

