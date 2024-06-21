import { Button, Layout, Menu, theme, Row, Col, Table } from "antd";
import React from "react";
import { FaBox, FaDollarSign, FaUsers } from "react-icons/fa6";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import StatsCard from "../../Component/Card";
import { FaChartLine } from "react-icons/fa";

function Index() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const tableData = [
    {
      key: "1",
      Name: "John Brown",
      Investment: "$3200",
      Profit: "$0.56",
      Profitper: "1.887%",
    },
    {
      key: "2",
      Name: "John Brown",
      Investment: "$3200",
      Profit: "$0.56",
      Profitper: "1.887%",
    },
    {
      key: "3",
      Name: "John Brown",
      Investment: "$3200",
      Profit: "$0.56",
      Profitper: "1.887%",
    },
    {
      key: "3",
      Name: "John Brown",
      Investment: "$3200",
      Profit: "$0.56",
      Profitper: "1.887%",
    },
    {
      key: "3",
      Name: "John Brown",
      Investment: "$3200",
      Profit: "$0.56",
      Profitper: "1.887%",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Investment",
      dataIndex: "Investment",
      key: "Investment",
    },
    {
      title: "Profit",
      dataIndex: "Profit",
      key: "Profit",
    },
    {
      title: "% Profit ",
      dataIndex: "Profitper",
      key: "Profitper",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <StatsCard />
        </div>
        <div className="col-md-12"> 
          <h1 className="pb-3"></h1>
        </div>
        <div className="col-md-6 mt-4">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="col-md-6 mt-4">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="col-md-12 mt-5">
          <Table dataSource={tableData} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default Index;
