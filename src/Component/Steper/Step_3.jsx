import React from "react";
import { LuUsers2 } from "react-icons/lu";
import { MdWorkspacePremium } from "react-icons/md";
import { RiBarChartGroupedFill } from "react-icons/ri";

const Step_3 = () => {
  const Packages = [
    {
pack_text:"Starter Pack",
Dollar_text:"29",
Advantage:"Advantage",
head_icon:<RiBarChartGroupedFill />

  },
    {
pack_text:"Starter Pack",
Dollar_text:"29",
Advantage:"Advantage",
head_icon:<LuUsers2 />


  },
    {
pack_text:"Starter Pack",
Dollar_text:"29",
Advantage:"Advantage",
head_icon:<MdWorkspacePremium />


  },
];

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mb-5">
          {Packages.map((item,index)=>(
            <>
          <div className="col-lg-3 col-md-12 mb-5" key={index}>
        
            <div className={index === 1 ? "center_card card p-3" : "package_card_frontend card p-3"}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#6824d6"
                  className="w-25"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
         <h6 className="pack_text">{item.pack_text}</h6>
              </div>
              <div>
          <h4 className="dollar_class"><sup className="fw-light fs-4">$</sup>  {item.Dollar_text}</h4>
                <hr />
              {[1,2,3,4].map(()=>(
                <>
                <li className="mt-1 li_class">{item.Advantage}</li>
                </>
              ))}
              </div>
              <div >
                <button className="btn_started p-2 mt-5 w-100">Get Started</button>
              </div>
            </div>
          </div>
            
            </>
          ))}
         
        </div>
      </div>
    </>
  );
};

export default Step_3;
