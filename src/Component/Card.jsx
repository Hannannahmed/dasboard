import React from "react";
import { IoAnalytics } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
const StatsCard = ({ title, value, icon }) => {
  return (
    <div class="main-content">
      <div class="header bg-gradient-primary pb-8 pt-2 pt-md-8">
        <div class="container-fluid">
          <h1 className="pb-3">Monthly Report</h1>
          <div class="header-body">
            <div class="row">
              <div class="col-xl-3 col-lg-6">
                <div
                  class="card card-stats mb-4 mb-xl-0 rounded border-0"
                  style={{ backgroundColor: "#FFE2E5", color: "#FA5A7D" }}
                >
                  <div class="card-body">
                    <div class="row">
                    <div class="col">
                        <h6 class="card-title text-uppercase text-dark mb-3">
                          Traffic
                        </h6>
                        <span class="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <div class="col-auto">
                        <div style={{ backgroundColor: "#FFE2E5", color: "#BF83FF" }}>
                        <IoAnalytics size={30}/>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-dark text-sm">
                      <span class="text-success mr-2">
                        <i class="fa fa-arrow-up"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6">
                <div
                  class="card card-stats mb-4 mb-xl-0 rounded border-0"
                  style={{ backgroundColor: "#FFF4DE", color: "#FF947A" }}
                >
                  <div class="card-body">
                    <div class="row">
                    <div class="col">
                        <h6 class="card-title text-uppercase text-dark mb-3">
                        New users
                        </h6>
                        <span class="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div class="col-auto">
                        <div style={{ backgroundColor: "#FFF4DE", color: "#BF83FF" }}>
                        <FaRegUser size={25}/>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-dark text-sm">
                      <span class="text-danger mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6">
                <div
                  class="card card-stats mb-4 mb-xl-0 rounded border-0"
                  style={{ backgroundColor: "#DCFCE7", color: "#3CD856" }}
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h6 class="card-title text-uppercase text-dark mb-3">
                          Sales
                        </h6>
                        <span class="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i class="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-dark text-sm">
                      <span class="text-warning mr-2">
                        <i class="fas fa-arrow-down"></i> 1.10%
                      </span>
                      <span class="text-nowrap">Since yesterday</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6">
                <div
                  class="card card-stats mb-4 mb-xl-0 rounded border-0"
                  style={{ backgroundColor: "#F3E8FF", color: "#BF83FF" }}
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h6 class="card-title text-uppercase text-dark mb-3">
                          Performance
                        </h6>
                        <span class="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <div class="col-auto">
                        <div style={{ backgroundColor: "#F3E8FF", color: "#BF83FF" }}>
                          <LuBadgePercent size={40} />
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-dark text-sm">
                      <span class="text-success mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
