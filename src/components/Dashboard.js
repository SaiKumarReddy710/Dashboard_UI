import React from 'react';
import Sidebar from './Sidebar';
import AssessmentProgressChart from './AssessmentProgressChart';
import AttendanceChart from './AttendanceChart';
import { courseData } from '../data/dummyData';
import { Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className='d-flex flex-md-row flex-column flex-container m-1'>
      <div className='col-md-3'>
          <Card>
            <Card.Body>
              <Sidebar />
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-9'>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Total Students</h5>
                  <p>{courseData.totalStudents}</p>
                </div>
                <div>
                  <h5>Course Average Mark</h5>
                  <p>{courseData.averageMark}%</p>
                </div>
              </div>
              <AssessmentProgressChart />
              <AttendanceChart />
            </Card.Body>
          </Card>
        </div>
      </div>
  );
};

export default Dashboard;
