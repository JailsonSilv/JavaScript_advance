import React from 'react'

const Fragments = ({propFragment}) => {
  return (
    <>
      <h1>Fragment</h1>
      <h2>Primeiro  título</h2>
      <h3>Segundo título </h3>
      <h4>{propFragment}</h4>
    </>
  );
}

export default Fragments;