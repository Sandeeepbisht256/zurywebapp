import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { useForm, Controller } from 'react-hook-form'
import { Label, Input, FormGroup, Row, Col, Button, Form, NavItem  } from 'reactstrap'

import '@styles/react/libs/flatpickr/flatpickr.scss'

const InfoTabContent = ({ data }) => {
  const { register, errors, handleSubmit, control, trigger } = useForm({
    defaultValues: { dob: data.dob || new Date() }
  })

  const onSubmit = data => trigger()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
      <NavItem>
          <lock size={18} className='mr-1' />
          <span className='font-weight-bold'>List of Foods eaten in last 7 days</span>
      </NavItem>
     
       
        <Col className='mt-1' sm='12'>
          <Button.Ripple className='mr-1' color='primary'>
            Save changes
          </Button.Ripple>
          <Button.Ripple color='secondary' outline>
            Cancel
          </Button.Ripple>
        </Col>
      </Row>
    </Form>
  )
}

export default InfoTabContent
