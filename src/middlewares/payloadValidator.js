import Joi from 'joi';

export default (schema, property) => { 
  return (req, res, next) => { 
  const { error } = Joi.validate(req.body[property] || req.body, schema); 
  const valid = error == null; 

  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');

    console.log("error", message); 
    res.status(422).json({ error: message }) } 
  } 
} 