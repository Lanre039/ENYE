import React, { useState} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {connect} from 'react-redux'
import 'antd/dist/antd.css'
import { Form, Input, Icon, Select, Button, Table, DatePicker } from 'antd'
import './UserForm.css';
import {getProfiles, createProfile, userDob, userHobby, userStyle, rmStyle, userAge } from '../../actions'




const { Option } = Select;


let dob, age, hobby;
const FormItem = Form.Item


  

  function FormHead() {
    const [formHead, setFormHead] = useState('Input Details Here');
  
    return (
      <div style={{fontSize: '1.5rem', paddingBottom: '1rem' }}>{formHead}</div>
    )
  }

class UserForm extends React.Component {


  componentDidMount() {
    this.props.getProfiles();
    console.log(this.props.userProfiles);
    console.log(this.props.style);

  }
  
  onSelect = (value) => {
    console.log(`selected ${value}`);
    hobby = `${value}`
    console.log(hobby);

  }
  
  onChange = (date, dateString) => {
    console.log(date, dateString);
    
     dob = dateString;
    
    console.log(dob);
    const [year, month, day] = dob.split('-', 3)
    console.log(year, month, day)
    age = new Date().getFullYear() - year;
    console.log(age)

  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
      
          this.props.form.resetFields();

        
        console.log('Received values of form: ', values)
        

        this.props.createProfile(values);
        this.props.userAge(age);
        this.props.userDob(dob);
        this.props.userHobby(hobby);
        this.props.rmStyle();
  
      }
    })
  
  }
  
  renderAges = () => {
  
    return this.props.userAges.map((age, index) => {
      return (
          <tr key={index}>
          <td>{age}</td>
        </tr>
      );
    });
  }

  renderHobbies = () => {
    return this.props.userHobbies.map((hobby, index) => {
      return (
        <tr key={index}>
          <td>{hobby}</td>
        </tr>    
      );
    });
  }

  renderDobs = () => {
    return this.props.userDobs.map((dob, index) => {
      return (
        <tr key={index}>
          <td>{dob}</td>
        </tr>
        
      );
    });
  }
  
  
  renderFirstName = () => {
    return this.props.userProfiles.map((profile, index) => {
      return (
        <tr key={index}>
          <td>{profile.FirstName}</td>
        </tr>
        
      )
    });
  }

  renderLastName = () => {
    return this.props.userProfiles.map((profile, index) => {
      return (
        <tr key={index}>
          <td>{profile.LastName}</td>
        </tr>
      )
    });
  }
  

  render() {
    const { getFieldDecorator } = this.props.form;
   
   
    console.log(this.props);
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
        fname: this.renderFirstName(),
        lname: this.renderLastName(),
        dob: this.renderDobs(),
        age: this.renderAges(),
        hobby: this.renderHobbies()
      }
    ]
    
    return (
      <div className="data-form">
        <div className="form">
          <FormHead />
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
             <DatePicker onChange={this.onChange} />
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
            onSelect={this.onSelect}
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
        <div style={this.props.tableStyle}>
        <h4 style={{fontSize: "1.5rem"}}>Here are the details you filled above.</h4>
        <Table columns={columns} dataSource={data} size="middle" />
        
        </div>
        
      </div>
    )
  }
}



const HorizontalUserForm = Form.create({ name: 'login' })(UserForm)



const mapStateToProps = (state) => {
  return {
    userProfiles: state.form.profiles,
    tableStyle: state.form.style,
    userAges: state.form.ages,
    userHobbies: state.form.hobbies,
    userDobs: state.form.dobs,

  };
}

export default connect(mapStateToProps, { createProfile, getProfiles, userDob, userHobby, userStyle, rmStyle, userAge })(HorizontalUserForm);