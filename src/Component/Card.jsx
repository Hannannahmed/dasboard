import React from "react";
import { IoAnalytics } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
const StatsCard = ({ title, value, icon }) => {
const card_map =[
  {
    card_heading:"Traffic",
    card_icon:<IoAnalytics color="#BF83FF" size={70} />,
    perce_text:"49,65%",
    percent_since:"3.48%",
    last_month:"Since last month"

  },
  {
    card_heading:"Stats",
    card_icon:<LuBadgePercent color="#FF7361" size={70} />,
    perce_text:"49,65%",
    percent_since:"3.48%",
    last_month:"Since last month"

  },
  {
    card_heading:"Users",
    card_icon:<FaRegUser color="#00CF7F" size={70} />,
    perce_text:"49,65%",
    percent_since:"3.48%",
    last_month:"Since last month"

  },
  {
    card_heading:"Products",
    card_icon:<IoAnalytics color="#00BCFF" size={70} />,
    perce_text:"49,65%",
    percent_since:"3.48%",
    last_month:"Since last month"

  },
]

  return (
    <div class="main-content">
      <div class="header bg-gradient-primary pb-8 pt-2 pt-md-8">
        <div class="container-fluid">
          <h1 className=" monthly_report">Monthly Report</h1>
          <div className="underline_div"></div>
          <div class="header-body">
            <div class="row">
                {card_map.map((item,index)=>(
                  <>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                <div className="card card_shadow p-3">
                  <div className="d-flex justify-content-between">
                    <h4 className={`${index!=0?"head_color"+index:"card_head"}`}>{item.card_heading}</h4>
                    <div  className="icon_card p-2">
                    {item.card_icon}
                    </div>
                  </div>
                  <div>
                    <h3 className={`${index!=0?"acticeColor"+index:'card_percent'}`} >{item.perce_text}</h3>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-success percent_since">{item.percent_since}</p>
                    <p className="last_month">{item.last_month}</p>
                  </div>
                </div>
              </div>
                  </>
                ))}
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
