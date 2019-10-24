import React from 'react'

import 'antd/dist/antd.css'
import { Form, Input, Icon, Select, Button, Table, DatePicker } from 'antd'
import './UserForm.css';



const { Option } = Select;

let hobby;
function onSelect(value) {
  console.log(`selected ${value}`);
  hobby = `${value}`
  console.log(hobby);
  
  
}


let dob, age;
function onChange(date, dateString) {
  console.log(date, dateString);
  
   dob = dateString;
  
  console.log(dob);
  const [year, month, day] = dob.split('-', 3)
  console.log(year, month, day)
  age = new Date().getFullYear() - year;
  console.log(age)
  
}


const FormItem = Form.Item


class UserForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    data: {
      firstName: '',
      lastName: '',
      dob: '',
      hobby: '',
      age: null,
    },
    style: {
      visibility: "hidden"
    }
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
      
          this.props.form.resetFields()
        
        console.log('Received values of form: ', values)
        
        console.log(values);
        
        this.setState({
          data: {
            firstName: values.FirstName,
            lastName: values.LastName,
            age: age,
            hobby: hobby,
            dob: dob,
          },
          style: {
            ...this.state.style, visibility: "visible"
          },
          
        })
        this.state.datas.push(this.state.data);
        
        console.log(this.state.datas[0].data.hobby);
        
      }
    })
  
  }
  

  render() {
    const { getFieldDecorator } = this.props.form;
  
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'fname',
      },
      {
        title: 'Last Name',
        dataIndex: 'lname',
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dob',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
      }
    ]
    const data = [
      {
        key: '1',
        fname: this.state.data.firstName,
        lname: this.state.data.lastName,
        dob: this.state.data.dob,
        age: this.state.data.age,
        hobby: this.state.data.hobby,
      }
    ]
    
    return (
      <div className="data-form">
        <div className="form">
        <Form inline="true" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('FirstName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="First Name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('LastName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Last name" />
          )}
        </FormItem>
        <FormItem>
        {getFieldDecorator('data', {
            rules: [{ required: false, message: 'Date is required' }],
          })(
            <div>
              <span style={{fontSize: "1rem", fontWeight: 200 }}>Date of Birth:</span>
             <DatePicker onChange={onChange} />
          </div>
          )}
        </FormItem>
        <FormItem>
        <div>
          <span style={{fontSize: "1rem", fontWeight: 200 }}>Select a hobby:</span>
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select hobby"
            autoClearSearchValue={true}
            optionFilterProp="children"
            onSelect={onSelect}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Reading">Reading</Option>
            <Option value="Travelling">Travelling</Option>
            <Option value="Writing">Writing</Option>
            <Option value="Others">Others</Option>
          </Select>
        </div>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
      </div>
      <hr/>
        <div className="table">
          <div style={this.state.style}>
           <h4 style={{fontSize: "1.5rem"}}>Here are the details you filled above.</h4>
           <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </div>
        
      </div>
    )
  }
}

const HorizontalUserForm = Form.create({ name: 'login' })(UserForm)

export default HorizontalUserForm