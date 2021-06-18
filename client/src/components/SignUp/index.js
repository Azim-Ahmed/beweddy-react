import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
const SignUp = () => {
  const [formState, setFormState] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const getOwnerName = () => {
    return (
      <div className={`mb-3 row`}>
        <div className='col-md-6'>
          <label for='firstName' className='form-label'>
            first name
          </label>
          <input
            type='text'
            className='form-control'
            id='firstName'
            placeholder='firstName'
            {...register('firstName', { required: true, maxLength: 20 })}
          />
          {errors.firstName && <span>this feild is required</span>}
        </div>
        <div className='col-md-6'>
          <label for='lastName' className='form-label'>
            last name
          </label>
          <input
            type='text'
            className='form-control'
            id='lastName'
            placeholder='lastName'
            {...register('lastName')}
          />
        </div>
        <div className='col mt-3'>
          <Button
            onClick={() => {
              setFormState(1);
            }}
            color='primary'
            type='button'
          >
            next
          </Button>
        </div>
      </div>
    );
  };

  const getFionsiName = () => {
    return (
      <div className={`mb-3 row`}>
        <div className='col-md-6'>
          <label for='suposeFirstName' className='form-label'>
            supose first name
          </label>
          <input
            type='text'
            className='form-control'
            id='suposeFirstName'
            placeholder='supose first name'
            {...register('suposeFirstName', { required: true, maxLength: 20 })}
          />
          {errors.firstName && <span>this feild is required</span>}
        </div>
        <div className='col-md-6'>
          <label for='suposeLastName' className='form-label'>
            supose last name
          </label>
          <input
            type='text'
            className='form-control'
            id='suposeLastName'
            placeholder='supose last name'
            {...register('suposeLastName')}
          />
        </div>
        <div className='col mt-3'>
          <Button
            onClick={() => {
              setFormState(2);
            }}
            color='primary'
            type='button'
          >
            next
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {formState === 0 && getOwnerName()}
            {formState === 1 && getFionsiName()}
            {formState === 2 && (
              <input type='submit' className='btn btn-primary' />
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
