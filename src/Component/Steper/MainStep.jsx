import React, { useState } from 'react';
import Step_1 from './Step_1';
import Step_2 from './Step_2';
import Step_3 from './Step_3';
import Step_4 from './Step_4';
import Step_5 from './Step_5';
import Step_6 from './Step_6';
import { Navigate, useNavigate } from 'react-router-dom';

const MainStep = () => {
  const [selectedKey, setSelectedKey] = useState(1);
  const [disable, setDisable] = useState(false);
  const [validated, setValidated] = useState(false);
  const Navigate= useNavigate()
  const renderContent = () => {
    switch (selectedKey) {
      case 1:
        return  <Step_1 setValidated={setValidated} />;
        case 2:
          return <Step_2 />;
      case 3:
        return <Step_3 />;
      case 4:
        return <Step_4 />;
      case 5:
        return <Step_5 />;
        case 6:
        return <Step_6 />;
      default:
        return "default";
      }
    };
  

  const handleNext = () => {
    if (selectedKey < 7) {
      const nextKey = selectedKey + 1;
      setSelectedKey(nextKey);
      console.log(nextKey)
      if (nextKey === 7) {
       Navigate("/dashboard")
      }
    }
  };

  const handlePrevious = () => {
    if (selectedKey > 0) {
      const prevKey = selectedKey - 1;
      setSelectedKey(prevKey);
      if (prevKey < 6) {
        setDisable(false);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`d-flex flex-column justify-content-center align-items-center ${selectedKey === 3 ? "h-auto " : "  vh-100" }`}>
            <div className="card p-5">
            <div className="d-flex flex-column  ">
           {renderContent()}
            </div>
           <div className='d-flex gap-5 justify-content-between'>
              <button className={selectedKey ==1 ? "btn_disbaled" : "pre_btn"}  onClick={handlePrevious} disabled={selectedKey === 1}>
                Previous
              </button>
              <button className='next_btn' onClick={handleNext} >
                Next
              </button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainStep;
