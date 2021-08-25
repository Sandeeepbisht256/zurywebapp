import { Fragment, useState } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, Card, CardBody } from 'reactstrap'

const GeneralTabs = ({ data }) => {
  const { register, errors, handleSubmit, control, setValue, trigger } = useForm()

  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const onSubmit = data => trigger()

  return (
<Fragment>
      <Media>
        <Media className='mr-25' left>
          <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
        </Media>
        <Media className='mt-75 ml-1' body>
        <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
            Edit
            <Input type='file' onChange={onChange} hidden accept='image/*' />
          </Button.Ripple>
         <Row>
         <Col sm='15'>
          <div className='d-flex align-items-center mb-2'>
            <h4 className='mb-0 ml-75'>Basic Details</h4>
          </div>
        </Col>
        </Row>
        <p>CUSTOMER DETAILS</p>
        </Media>
      </Media>
      <Row>


          <Col sm='0'></Col>
          <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Customer Name : gslixby0</h5>
      <Col sm='2'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Customer ID : gslixby0@abc.net.au</h5>
      <Col sm='1'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Weekly Assessment : Editior</h5>
      <Col sm='2'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Subscription : Editior</h5>
      <Col sm='2'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Days remaining : Editior</h5>
      <Col sm='3'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Active in last : Editior</h5>
      <Col sm='1'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Date of joining : Editior</h5>
      <Col sm='3'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Days on App : Editior</h5>
      <Col sm='2'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Coach day : Editior</h5>
      <Col sm='2'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Customer Age : 48</h5>
      <Col sm='2'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Customer Weight : Editior</h5>
      <Col sm='2'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>Customer Height : Editior</h5>
      <Col sm='1'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>List of phase of life : Enterprise</h5>
      <Col sm='1'></Col>
      <div className='d-flex align-items-center mb-2'></div>
      <h5 className= 'mb-0 ml-75'>List of Conditions : Inactive</h5>
     </Row>

   
             <Col className='mt-75' sm='12'>
            <Alert className='mb-50' color='warning'>
              <h4 className='alert-heading'>Your email is not confirmed. Please check your inbox.</h4>
              <div className='alert-body'>
                <a href='/' className='alert-link' onClick={e => e.preventDefault()}>
                  Resend confirmation
                </a>
              </div>
            </Alert>
          </Col>
      
    </Fragment>
  
  )
}

export default GeneralTabs
