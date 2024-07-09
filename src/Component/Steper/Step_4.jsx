import React, { useRef } from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';

const Step_4 = () => {
  const sigCanvasRef = useRef(null);

  const clearSignature = () => {
    sigCanvasRef.current.clear();
  };

  const saveSignature = () => {
    const signatureDataURL = sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png');
    console.log('Signature Data URL:', signatureDataURL);
   
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Step 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              commodi et ea, nulla ad minima dolorum in reprehenderit
              temporibus! Iste explicabo eaque dolores, libero molestias sit
              ipsum eligendi eveniet tempora.
            </p>
            <ReactSignatureCanvas
              ref={sigCanvasRef}
              penColor="black"
              canvasProps={{ className: 'sigCanvas', width: 500, height: 200 }}
              clearOnResize
            />
            <div className="mt-3 ">
              <button className="btn_clear mx-3" onClick={clearSignature}>Clear</button>
              <button className="btn_Save  ml-2" onClick={saveSignature}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step_4;
