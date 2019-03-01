import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange, className, id, value, children, onClickOnly }) => (
  <React.Fragment>
    <input type={type} name={name} checked={checked} onChange={onChange} className={className} id={id} value={value} />
    <label htmlFor={id}>
      <span>{children}</span>
      {onClickOnly ? <span className="Transfer__only" onClick={onClickOnly}>только</span> : ""}
    </label>
  </React.Fragment>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;
