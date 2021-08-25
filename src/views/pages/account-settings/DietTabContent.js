
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { useForm, Controller } from 'react-hook-form'
import { Label, Input, FormGroup, Row, Col, Button, Form, NavItem, search, Card, CardHeader, CardBody, CardTitle, Searchterm } from 'reactstrap'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Search } from 'react-feather'
import PlanCard from '../../apps/user/view/PlanCard'

const DietTabContent = ({ data }) => {
    const { register, errors, handleSubmit, control, trigger } = useForm({

    })

    const onSubmit = data => trigger()

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md='12'>
                    <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
                        <Label className='mb-0' for='search-invoice'>
                            Search:
                        </Label>
                        <Input
                            id='search-invoice'
                            className='ml-50 w-100'
                            type='text'
                        //   value={searchTerm}
                        //   onChange={e => handleFilter(e.target.value)}
                        />
                    </div>
                </Col>

                <Col sm='4'>
                    <div style={{marginTop: '20px', marginLeft: '20px'}}>
                        <PlanCard selectedUser={null} />
                    </div>
                    <div style={{marginTop: '20px', marginLeft: '20px'}}>
                        <PlanCard selectedUser={null} />
                    </div>
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

export default DietTabContent