import React, { useState,useEffect } from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import {
  ChartWrapper,
  ReportWrapper,
  ChartTitle,
  Subtitle,
  DatepickerRow,
} from "./styles";
import styles from '../../articles/index.module.scss'
import currentSstyles from './index.module.scss'

import { addDays } from "date-fns";
import CustomDatePicker from "./datepicker";
import { LastRow } from "./styles";
import InputField from "../../../input";
import GoogleAnalyticsIcon from "../../../../layouts/icons/analytics";

export default function AllAnalytics() {

  const [viewID, setViewID] = useState(process.env.NEXT_PUBLIC_ANALYTICS_VUE_ID);
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(new Date());

  

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.topFlex}>
          <h4> <GoogleAnalyticsIcon/> Google Analytics</h4>
          <div className={styles.currentSstyles}>
            <DatepickerRow>
              <CustomDatePicker
                placeholder={"From"}
                date={startDate}
                handleDateChange={(date) => setStartDate(date)}
              />
              <CustomDatePicker
                placeholder={"To"}
                date={endDate}
                handleDateChange={(date) => setEndDate(date)}
              />
            </DatepickerRow>
          </div>
        </div>
      </div>
        <div 
          className={currentSstyles.list}
          style={{
            paddingRight : "1px !important"
          }}
          >
          
          <div className={currentSstyles.container}>
            {viewID ? (
              <>
                
                <br></br>
              
                <DayVisitsReport
                  metric={"ga:users"}
                  title={"Users"}
                  viewID={viewID}
                  startDate ={startDate}
                  endDate = {endDate}
                />
              
                <DayVisitsReport
                  metric={"ga:sessions"}
                  title={"Sessions"}
                  viewID={viewID}
                  startDate ={startDate}
                  endDate = {endDate}
                />
             
              
                <PageviewsReport 
                  viewID={viewID} 
                  startDate ={startDate}
                  endDate = {endDate}
                />
                {/* <SourceReport 
                  viewID={viewID} 
                  startDate ={startDate}
                  endDate = {endDate}
                /> */}
                <CountriesReport 
                  viewID={viewID} 
                  startDate ={startDate}
                  endDate = {endDate}
                />

                <LastRow>
                  <BrowsersReport 
                    viewID={viewID} 
                    startDate ={startDate}
                    endDate = {endDate}
                  />
                  <DevicesReport 
                    viewID={viewID} 
                    startDate ={startDate}
                    endDate = {endDate}
                  />
                </LastRow>
              </>
            ) : (
              <InputField submitViewId={(id) => setViewID(id)} />
            )}
          </div>
        </div>      
    </div>
  )
}


// import { Tabs } from 'antd';
// const { TabPane } = Tabs;

const DashBoard = () => {
  const [viewID, setViewID] = useState(process.env.NEXT_PUBLIC_ANALYTICS_VUE_ID);
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={styles.container}>
      {viewID ? (
        <>
          <h4 style={{display:"flex",alignItems:"center"}}><GoogleAnalyticsIcon/> Google Analytics Dashboard</h4>
          <br></br>
          <div className={styles.datePicker}>
            <DatepickerRow>
              <CustomDatePicker
                placeholder={"Start date"}
                date={startDate}
                handleDateChange={(date) => setStartDate(date)}
              />
              <CustomDatePicker
                placeholder={"End date"}
                date={endDate}
                handleDateChange={(date) => setEndDate(date)}
              />
            </DatepickerRow>
          </div>
          <br></br>
          {/* <Tabs  type="card">
            <TabPane tab="Views" key="1">
              <DayVisitsReport
                metric={"ga:users"}
                title={"Users"}
                viewID={viewID}
                startDate ={startDate}
                endDate = {endDate}
              />
            </TabPane>
            <TabPane tab="Sessions" key="2">
              <DayVisitsReport
                metric={"ga:sessions"}
                title={"Sessions"}
                viewID={viewID}
                startDate ={startDate}
                endDate = {endDate}
              />
            </TabPane>
           
          </Tabs>
           */}
         
          <PageviewsReport 
            viewID={viewID} 
            startDate ={startDate}
            endDate = {endDate}
          />
          {/* <SourceReport 
            viewID={viewID} 
            startDate ={startDate}
            endDate = {endDate}
          /> */}
          <CountriesReport 
            viewID={viewID} 
            startDate ={startDate}
            endDate = {endDate}
          />

          <LastRow>
            <BrowsersReport 
              viewID={viewID} 
              startDate ={startDate}
              endDate = {endDate}
            />
            <DevicesReport 
              viewID={viewID} 
              startDate ={startDate}
              endDate = {endDate}
            />
          </LastRow>
        </>
      ) : (
        <InputField submitViewId={(id) => setViewID(id)} />
      )}
    </div>
  );
};




