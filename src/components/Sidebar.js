import React from 'react';
import { courseData } from '../data/dummyData';

const Sidebar = () => {
  return (
    <div className="p-3">
      <h5>Course Code</h5>
      <p>{courseData.code}</p>
      <h5>Course Name</h5>
      <p>{courseData.name}</p>
      <h5>Course Type</h5>
      <p>{courseData.type}</p>
      <h5>Course Period</h5>
      <p>{courseData.period}</p>
      <h5>Credits ({ Object.values(courseData.credits).reduce((acc,item) =>  acc+item,0)})</h5>
      <p>Lecture: {courseData.credits.lecture}</p>
      <p>Tutorial: {courseData.credits.tutorial}</p>
      <p>Practical: {courseData.credits.practical}</p>
      <p>Project: {courseData.credits.project}</p>
      <h5>Course Outcomes (COs)</h5>
      <div className="d-flex  flex-wrap">
            {courseData.outcomes.map((item, index) => (
              <div key={index} className="col-4 p-1">
                <button type="button" className="btn btn-success w-100 p-2">
                  {item}
                </button>
              </div>
            ))}
      </div>
      <h5>Mapped to this Course</h5>
      <div className="d-flex  flex-wrap">
            {courseData.mappedPos.map((item, index) => (
              <div key={index} className="col-4 p-1">
                <button type="button" className="btn btn-primary w-100 p-2">
                  {item}
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Sidebar;
