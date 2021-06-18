import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label for='email' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Email address'
                {...register('email', { required: true })}
              />
            </div>
            <div className='mb-3'>
              <label for='password' className='form-label'>
                Email address
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Enter your password'
                {...register('password', { required: true })}
              />
            </div>
            <input type='submit' className='btn btn-primary' />
          </form>
          <div>
            don't have an account ? <Link to='/signup'>create account</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
