import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import 'antd/dist/antd.css'
import { Form, Input, Icon, Select, Button, Table, DatePicker } from 'antd';
import './UserForm.css';
import {createProfile, userDob, userHobby, rmStyle, userAge } from '../../actions';




const { Option } = Select;


let dob, age, hobby;
const FormItem = Form.Item;


  

function FormHead() {
    const [formHead, setFormHead] = useState('Input Details Here');
  
    return (
      <div style={{fontSize: '1.5rem', paddingBottom: '1rem' }}>{formHead}</div>
    )
 }

function UserForm(props) {


  
  const listOfProfile = useSelector(state => state.form.profiles);
  const listOfAge = useSelector(state => state.form.ages);
  const listOfHobbies = useSelector(state => state.form.hobbies);
  const listOfDobs = useSelector(state => state.form.dobs);
  const tableStyle = useSelector(state => state.form.style);



  const dispatch = useDispatch();

  
  const onSelect = (value) => {
    console.log(`selected ${value}`);
    hobby = `${value}`
    console.log(hobby);
    
  }
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    
     dob = dateString;
    
    console.log(dob);
    const [year, month, day] = dob.split('-', 3)
    console.log(year, month, day)
    age = new Date().getFullYear() - year;
    console.log(age)

    
  }

  const { getFieldDecorator } = props.form;
  
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
      
          props.form.resetFields();

        
        console.log('Received values of form: ', values)

        dispatch(createProfile(values));
        dispatch(userAge(age));
        dispatch(userDob(dob));
        dispatch(userHobby(hobby));
        dispatch(rmStyle());

        // this.props.createProfile(values);
        // this.props.userAge(age);
        // this.props.userDob(dob);
        // this.props.userHobby(hobby);
        // this.props.rmStyle();
  
      }
    })
  
  }
  
  const renderAges = () => {
  
    return listOfAge.map((age, index) => {
      return (
          <tr key={index}>
          <td>{age}</td>
        </tr>
      );
    });
  }

  const renderHobbies = () => {
    return listOfHobbies.map((hobby, index) => {
      return (
        <tr key={index}>
          <td>{hobby}</td>
        </tr>    
      );
    });
  }

  const renderDobs = () => {
    return listOfDobs.map((dob, index) => {
      return (
        <tr key={index}>
          <td>{dob}</td>
        </tr>
        
      );
    });
  }
  
  
  const renderFirstName = () => {
    return listOfProfile.map((profile, index) => {
      return (
        <tr key={index}>
          <td>{profile.FirstName}</td>
        </tr>
        
      )
    });
  }

  const renderLastName = () => {
    return listOfProfile.map((profile, index) => {
      return (
        <tr key={index}>
          <td>{profile.LastName}</td>
        </tr>
      )
    });
  }
  

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
        fname: renderFirstName(),
        lname: renderLastName(),
        dob: renderDobs(),
        age: renderAges(),
        hobby: renderHobbies()
      }
    ]

    return (
      <div className="data-form">
        <div className="form">
          <FormHead />
        <Form inline="true" onSubmit={handleSubmit}>
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
        <div style={tableStyle}>
        <h4 style={{fontSize: "1.5rem"}}>Here are the details you filled above.</h4>
        <Table columns={columns} dataSource={data} size="middle" />
        
        </div>
        
      </div>
    )

}



// const HorizontalUserForm = Form.create({ name: 'login' })(UserForm)



// const mapStateToProps = (state) => {
//   return {
//     userProfiles: state.form.profiles,
//     tableStyle: state.form.style,
//     userAges: state.form.ages,
//     userHobbies: state.form.hobbies,
//     userDobs: state.form.dobs,

//   };
// }

// const mapDispatchToProps = { createProfile, getProfiles, userDob, userHobby, userStyle, rmStyle, userAge }

// export default connect(mapStateToProps, mapDispatchToProps )(HorizontalUserForm);

// export default HorizontalUserForm;


export default Form.create()(UserForm);