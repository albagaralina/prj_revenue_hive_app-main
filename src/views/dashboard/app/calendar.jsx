import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import ProfileHeader from "../../../components/profile-header";


// img
import profilebg6 from "../../../assets/images/page-img/profile-bg6.jpg";

//full calender

// import FullCalendar from "@fullcalendar/react";

// import dayGridPlugin from "@fullcalendar/daygrid";
// import listPlugin from "@fullcalendar/list";
// import bootstrapPlugin from "@fullcalendar/bootstrap";

import * as moment from "moment";

//flatpickr
import Flatpickr from "react-flatpickr";

const Calendar = () => {
  const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : r;
        return v.toString(16);
      }
    );
  };

  
  const events= [
    {
      title: "5:30a Click for Google",
      url: "http://google.com/",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-20, "days")
          .format("YYYY-MM-DD") ,
      color: "#50b5ff",
    },
    {
      title: "5:30a All Day Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-18, "days")
          .format("YYYY-MM-DD") ,
      color: "#a09e9e",
    },
    {
      title: "5:30a Long Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-16, "days")
          .format("YYYY-MM-DD"),
      end:
        moment(new Date(), "YYYY-MM-DD")
          .add(-13, "days")
          .format("YYYY-MM-DD") ,
      color: "#49f0d3",
    },
    {
      groupId: "999",
      title: "5:30a Repeating Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-14, "days")
          .format("YYYY-MM-DD"),
      color: "#ffba68",
    },
    {
      groupId: "999",
      title: "5:30a Repeating Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-12, "days")
          .format("YYYY-MM-DD") ,
      color: "#d592ff ",
    },
    {
      groupId: "999",
      title: "5:30a Repeating Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-10, "days")
          .format("YYYY-MM-DD") ,
      color: "#ff9b8a",
    },
    {
      title: "5:30a Birthday Party",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-8, "days")
          .format("YYYY-MM-DD"),
      color: "#49f0d3",
    },
    {
      title: "5:30a Meeting",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-6, "days")
          .format("YYYY-MM-DD") ,
      color: "#a09e9e",
    },
    {
      title: "5:30a Birthday Party",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-5, "days")
          .format("YYYY-MM-DD") ,
      color: "#49f0d3",
    },
    {
      title: "5:30a Birthday Party",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(-2, "days")
          .format("YYYY-MM-DD") ,
      color: "#ff9b8a ",
    },

    {
      title: "5:30a Meeting",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(0, "days")
          .format("YYYY-MM-DD"),
      color: "#ff9b8a",
    },
    {
      title: "5:30a Click for Google",
      url: "http://google.com/",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(0, "days")
          .format("YYYY-MM-DD") ,
      color: "#d592ff",
    },
    {
      groupId: "999",
      title: "5:30a Repeating Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(0, "days")
          .format("YYYY-MM-DD") ,
      color: "#49f0d3",
    },
    {
      title: "5:30a Birthday Party",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(0, "days")
          .format("YYYY-MM-DD"),
      color: "#f4a965",
    },
    {
      title: "5:30a Doctor Meeting",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(0, "days")
          .format("YYYY-MM-DD") ,
      color: "#f4a965",
    },
    {
      title: "5:30a All Day Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(1, "days")
          .format("YYYY-MM-DD") ,
      color: " #50b5ff",
    },
    {
      groupId: "999",
      title: "5:30a Repeating Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(8, "days")
          .format("YYYY-MM-DD") ,
      color: " #50b5ff",
    },
    {
      groupId: "999",
      title: "5:30a Repeating Event",
      start:
        moment(new Date(), "YYYY-MM-DD")
          .add(10, "days")
          .format("YYYY-MM-DD") ,
      color: "#49f0d3",
    },
  ]
  return (
    <>
      <ProfileHeader title="Calendar and Events" img={profilebg6} />
      <div id="content-page" className="content-inner">
        <Container>
          <Row className="row-eq-height">
            <Col md="4" lg="4">
              <Card className="">
                <Card.Body>
                  <Flatpickr
                    options={{ inline: true }}
                    className="d-none"
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title ">Classification</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center">
                    <Link to="#" className="material-symbols-outlined">
                      add
                    </Link>
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <ul className="m-0 p-0 job-classification list-inline">
                    <li className="d-flex align-items-center">
                      <i className="material-symbols-outlined md-18 bg-primary">
                        check_circle
                      </i>
                      Meeting
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="material-symbols-outlined md-18 bg-success">
                        check_circle
                      </i>
                      Business travel
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="material-symbols-outlined md-18 bg-warning">
                        check_circle
                      </i>
                      Personal Work
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="material-symbols-outlined md-18 bg-info">
                        check_circle
                      </i>
                      Team Project
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Today's Schedule</h4>
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <ul className="m-0 p-0 today-schedule">
                    <li className="d-flex">
                      <div className="schedule-icon">
                        <i className="material-symbols-outlined text-primary md-18">
                          fiber_manual_record
                        </i>
                      </div>
                      <div className="schedule-text">
                        <span>Web Design</span>
                        <span>09:00 to 12:00</span>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="schedule-icon">
                        <i className="material-symbols-outlined text-success md-18">
                          fiber_manual_record
                        </i>
                      </div>
                      <div className="schedule-text">
                        <span>Participate in Design</span>
                        <span>09:00 to 12:00</span>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md="8" lg="8">
              <Card >
                <Card.Header className="d-flex justify-content-between flex-wrap">
                  <div className="header-title">
                    <h4 className="card-title">Book Appointment</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center mt-1 mt-md-0">
                    <Link
                      to="#"
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <i className="material-symbols-outlined me-1 md-18">
                        add
                      </i>
                      Book Appointment
                    </Link>
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  {/* <FullCalendar
                    className="calendar-s"
                    initialView="dayGridMonth"
                    contentHeight="auto"
                    eventLimit=" true"
                    dayMaxEvents={1}
                    plugins={[dayGridPlugin, listPlugin, bootstrapPlugin]}
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                    }}
                    events={events}
                  /> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Calendar;
