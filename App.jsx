import React from 'react';
import './App.css'
 
function App(){
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
 
 
  const handleSubmit = (event) => {
    event.preventDefault()

 
    alert(`Nome: ${nome},  Sobrenome: ${sobrenome}, Email: ${email}`)
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h1>Forms</h1>
 
 
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" value={nome}
      onChange={(e) => setNome(e.target.value)} />
      <br />
 
      <label htmlFor="sobrenome">Sobrenome:</label>
      <input type="text" name="sobrenome" id="sobrenome" value={sobrenome}
      onChange={(e) => setSobrenome(e.target.value)} />
      <br />
 
 
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <br />
 
 
 
      <button type="submit">Enviar</button>
    </form>
  )
}
 
export default App;
