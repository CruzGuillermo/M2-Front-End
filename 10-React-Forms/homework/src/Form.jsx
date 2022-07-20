import React from 'react';
import './App.css'

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password){
    errors.password = 'Password is required'
  } else if ((!/(?=.*[0-9])/.test(input.password)))
  {errors.password = 'Password is invalid';}
  return errors;
};

export default function  Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const [ errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
 
  return (
    <form>
      <div>
    <label>Username:</label>
    <input className={errors.username && 'danger'}
      type="text" name="username" onChange={handleInputChange} value={input.username} />
    {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
</div>
      <form />
      <label>Password</label>
      <input className={errors.password && 'danger'} name="password"
       value={input.password} 
       type="password" 
       placeholder="Password"
       onChange={handleInputChange}/>
       <p className='danger'>{errors.password} </p>
     <form/>
     <input type="submit" value='agregar' />
    </form>
  )
}