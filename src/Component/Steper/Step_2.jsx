import React from 'react'
import { Flex, Input, Typography } from 'antd';
const { Title } = Typography;

const Step_2 = () => {
  
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-5">
          <Flex gap="middle" align="flex-start" vertical>
          <Title level={10} >OTP</Title>
          <Input.OTP   mask="🔒" {...sharedProps} />
          </Flex>
        </div>
      </div>
    </div>
  </>
  )
}

export default Step_2