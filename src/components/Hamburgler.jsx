import React from 'react'
import './Hamburgler.css'

function Hamburgler(props) {
  const setMenuOpen = props.setMenuOpen
  return (
    <div className="hamburgler_container">
      <input className="menu" type="checkbox" name="menu" id="menu" />
      <label className="hamburgler-label" htmlFor="menu">
        <div onClick={() => setMenuOpen((curr) => !curr)}>
          <svg
            className="hamburgler"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path className="top" d="M0 0H500V93H0V0Z" />
            <path className="middle1" d="M0 204H500V297H0V204Z" />
            <path className="middle2" d="M0 204H500V297H0V204Z" />
            <path className="bottom" d="M0 407H500V500H0V407Z" />
          </svg>
        </div>
      </label>
    </div>
  )
}

export default Hamburgler
