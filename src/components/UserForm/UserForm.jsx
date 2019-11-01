import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch }  from 'react-redux';

import 'antd/dist/antd.css'
import { Form, Input, Icon, Select, Button, Table, DatePicker } from 'antd';
import './UserForm.css';
// import {createProfile, getProfiles, userDob, userHobby, rmStyle, userAge } from '../../actions';
import actionCreators  from '../../actions/index';

import {  firebaseConfig } from '../../config/firebase';
import { database } from '../../config/firebase';

import uuid from 'uuid';
const { Option } = Select;


let dob, age, hobby;
const FormItem = Form.Item;

var ref = database.ref('items');
const formData = (fname, fAges, fDob, fHobbies )  => {
  
    const uuidv5 = require('uuid/v5');
    var dataref = ref.push({
      userId: uuid("https://www.terraform.io/", uuidv5.URL),
      firstName: fname.FirstName,
      lastName: fname.LastName,
      hobby: fHobbies,
      dobs: fDob,
      ages: fAges
    });
  console.log(dataref);
}

// var datas = [];
// ref.on('child_added', function(snap) {
//   datas.push(snap.val());
//   console.log(datas);
// })


function FormHead() {
    const [formHead, setFormHead] = useState('Input Details Here');
  
    return (
      <div style={{fontSize: '1.5rem', paddingBottom: '1rem' }}>{formHead}</div>
    )
 }

function UserForm(props) {
  
  const listOfUserId = useSelector(state => state.form.userId);
  const listOfFirstName = useSelector(state => state.form.firstName);
  const listOfLastName = useSelector(state => state.form.lastName);
  const listOfAge = useSelector(state => state.form.ages);
  const listOfHobbies = useSelector(state => state.form.hobbies);
  const listOfDobs = useSelector(state => state.form.dobs);
  const tableStyle = useSelector(state => state.form.style);


  

  
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

  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
      
          props.form.resetFields();


        // dispatch(createProfile(values));
        // // dispatch(getProfiles(values));
        // dispatch(userAge(age));
        // dispatch(userDob(dob));
        // dispatch(userHobby(hobby));
        dispatch(actionCreators.rmStyle());
  
        formData(values, age, dob, hobby);

        // this.props.createProfile(values);
        // this.props.userAge(age);
        // this.props.userDob(dob);
        // this.props.userHobby(hobby);
        // this.props.rmStyle();
  
      }
    })
  
  }

  
  const renderUserId = () => {
  
    return listOfUserId.map((id, index) => {
      const dataId = id.split('-', 1)
      return (
          <tr key={index}>
          <td>{dataId}</td>
        </tr>
      );
    });
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
    return listOfFirstName.map((firstName, index) => {
      return (
        <tr key={index}>
          <td>{firstName}</td>
        </tr>
        
      )
    });
  }

  const renderLastName = () => {
    return listOfLastName.map((lastName, index) => {
      return (
        <tr key={index}>
          <td>{lastName}</td>
        </tr>
      )
    });
  }
  

  const columns = [
    {
        title: 'User Id',
        dataIndex: 'userid',
      },
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
        userid: renderUserId(),
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
        {/* <p>{renderUserId()}</p> */}
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