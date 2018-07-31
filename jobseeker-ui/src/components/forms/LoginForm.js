import React from 'react';
import propTypes from 'prop-types'
import { Form, Button } from "semantic-ui-react";
import Validator from "validator"  

class LoginForm extends React.Component {

    state = {
        data: {
           email: '',
           password: ''  
        },
        loading: false,
        errors: {}
    }

    onChange = e =>
      this.setState({
          data: {...this.state.data,[e.target.name]: e.target.value}
      })

      onSubmit = () => {
          //console.log(this.state.data)
          const errors = this.validate(this.state.data);
          //console.log(errors)
          this.setState({ errors })
          if (Object.keys(errors).length === 0) {
              this.props.submit(this.state.data)
          }
      }

      validate = (data) => {
         const errors = {};
         if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";      
         if (!data.password) errors.password = "Can't be blank";     
         return errors; 
      }

    render() {
        const {data, errors} = this.state
        return (
         <Form onSubmit={this.onSubmit}>
            <Form.Field>
               <label htmlFor="email">Email</label>
               <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="user@cognizant.com"
                  value={data.email}
                  onChange={this.onChange}
                />  
               {errors.email}         
           </Form.Field> 
           <Form.Field>
               <label htmlFor="password">password</label>
               <input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder="make it secure"
                  value={data.password}
                  onChange={this.onChange}
                />
               {errors.password}                     
           </Form.Field> 
           <Button primary>Login</Button>   
         </Form>   
        )
    }
}

LoginForm.propTypes = {
    submit: propTypes.func.isRequired
}

export default LoginForm