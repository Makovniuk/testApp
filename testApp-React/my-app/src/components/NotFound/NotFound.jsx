import React from 'react';

export default function NotFound() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{ fontSize: '55px', color: 'white' }}>404</h1>
      <p style={{ fontSize: '45px', color: 'white' }}>NOT FOUND</p>
    </div>
  );
}
