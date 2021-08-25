import { useState, Fragment } from 'react'
import { isObjEmpty } from '@utils'
import Avatar from '@components/avatar'
import { Link, User } from 'react-feather'
import { Form, Label, Input, Button, Row, Col, FormGroup } from 'reactstrap'

const NotificationsTabContent = ({ data }) => {
  

  const renderTwitterConnection = () => {
    if (!isObjEmpty(data.connections.twitter)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.twitter.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.twitter.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderFacebookConnection = () => {
    if (!isObjEmpty(data.connections.facebook)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.facebook.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.facebook.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderGoogleConnection = () => {
    if (!isObjEmpty(data.connections.google)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.google.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.google.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
      
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  const renderGithubConnection = () => {
    if (!isObjEmpty(data.connections.github)) {
      return (
        <Fragment>
          <Avatar className='mb-1' img={data.connections.github.profileImg} imgHeight='40' imgWidth='40' />
          <p className='mb-0'>@{data.connections.github.id}</p>
          <a href='/' onClick={e => e.preventDefault()}>
            Disconnect
          </a>
        </Fragment>
      )
    } else {
      return (
        <Button.Ripple color='primary' outline>
          Connect
        </Button.Ripple>
      )
    }
  }

  return (
    
    <Form onSubmit={e => e.preventDefault()}>
      <Row>
     
        <Col sm='12'>
          <div className='d-flex align-items-center mb-2'>
            <Link size={18} />
            <h4 className='mb-0 ml-75'>Current Body Status</h4>
          </div>
        </Col>
        
        <Col sm='1'></Col>
        <Label for='company'>Calories In</Label>
        <Col sm='3'></Col>
        <Label for='company'>Calories Out</Label>
        <Col sm='12'>
          <hr className='my-2' />
        </Col>

        <Col sm='12'>
          <div className='d-flex align-items-center mb-2'>
            <Link size={18} />
            <h4 className='mb-0 ml-75'>Body measurment</h4>
          </div>
        </Col>
        
        <Col sm='1'></Col>
        <Label for='company'>Calories In</Label>
        <Col sm='3'></Col>
        <Label for='company'>Calories Out</Label>
        <Col sm='12'>
          <hr className='my-2' />
        </Col>

        <Col className='mt-1' sm='12'>
          <div className='d-flex align-items-center mb-3'>
            <User size={18} />
            <h4 className='mb-0 ml-75'>List of Foods eaten in last 7 days</h4>
          </div>
          <Row>
          <Col sm='1'></Col>
        <Label for='company'>Foods</Label>
        <Col sm='4'></Col>
        <Label for='company'> Foods</Label>
        
          </Row>
        </Col>
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

export default NotificationsTabContent
