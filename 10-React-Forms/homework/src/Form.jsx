import React from 'react';

export function validate (input){

  let errors={};

  if(!input.username){
     errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)){
    errors.username='Username is invalid';
  }

  if (!input.password){
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid';    
  }
  return errors;
}

export default function  Form() {


  const [input, setInput] = React.useState({ 
    username: '',
    password: '',
  });

  const [errors,setErrors] = React.useState ({});

  //MANEJO DEL CONTROL DE INPUTS//
  const handleInputChange = function(e) { 
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

  let errors = validate({...input, [e.target.name]:e.target.value
  });
  setErrors(errors);

  }

  return (
  <form >
    <div>
      <label>Username:</label>
      <input
        type="text" 
        name="username" 
        value={input.username} 
        onChange={handleInputChange}
        className={errors.username && 'danger'} // si errors.username existe entonces(&&)es danger.
        />
        {
          errors.username && <p className='danger'>(errors.username)</p>
        }
    </div>
      <div>
        <label>Password:</label>
        <input type='password' 
        name='password' 
        value={input.password} 
        onChange={handleInputChange}
        className={errors.password && 'danger'} // si errors.password entonces (&&)es danger.
        />
        {
          errors.password && <p className='danger'>(errors.password)</p>
        }
      </div>
      <div>
         <button type='submit' value='submit'>SEND</button>
      </div>
  </form>  
  )
}
