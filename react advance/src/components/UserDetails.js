import React from 'react'

const UserDetails = ({name, job, age}) => {
  return (
    <div>
      <h2> {name} </h2>
      <p>Trabalho: {job} </p>
      <p>Idade: {age} </p>
      {age >= 18 ? (
        <p>Pode tirar a carteira de habilitação</p>
        ) : (
        <p>Menor de idade.</p>
        )};
    </div>
  )
}

export default UserDetails