<script>
  import * as yup from 'yup';
  import { Form, Message, isInvalid } from 'svelte-yup';
  import { login } from "../requests/session";

  const schema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(8).max(15).label('Password')
  });
  let token = '', submitted = false, isValid;
  const fields = { email:'', password:'' }
  const formSubmit = () => {
    submitted = true;
    isValid = schema.isValidSync(fields)
    if (isValid) {
      login(fields)
      .then(response => console.log(response))
      .catch(error => error)
    }
  }

</script>


<Form class="form" {schema} {fields} {submitted} submitHandler={ formSubmit }>
  <input type='text' bind:value={fields.email} placeholder="Email">
  <Message name='email'/>
  <input type='password' bind:value={fields.password} placeholder="Password">
  <Message name='password'/>
  <button type='submit'>Login</button>
</Form>
