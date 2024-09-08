import React from 'react'
import { Dropdown } from "react-bootstrap";

const DotedDropdown = () => {
  return (
    <>
      <div className="card-post-toolbar">
        <Dropdown>
          <Dropdown.Toggle
            as="span"
          >
            <span className="material-symbols-outlined">
              more_horiz
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu m-0 p-0">
            <Dropdown.Item
              className=" p-3"
              to="#"
            >
              <div className="d-flex align-items-top">
                {/* <div className="h4 material-symbols-outlined"> */}
                <span className="material-symbols-outlined">save</span>
                {/* </div> */}
                <div className="data ms-2">
                  <h6>Save Post</h6>
                  <p className="mb-0">
                    Add this to your saved
                    items
                  </p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              className="p-3"
              to="#"
            >
              <div className="d-flex align-items-top">
                <span className="material-symbols-outlined">cancel</span>
                <div className="data ms-2">
                  <h6>Hide Post</h6>
                  <p className="mb-0">
                    See fewer posts like this.
                  </p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              className=" p-3"
              to="#"
            >
              <div className="d-flex align-items-top">
                <span className="material-symbols-outlined">person_remove</span>
                <div className="data ms-2">
                  <h6>Unfollow User</h6>
                  <p className="mb-0">
                    Stop seeing posts but stay
                    friends.
                  </p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              className=" p-3"
              to="#"
            >
              <div className="d-flex align-items-top">
                <span className="material-symbols-outlined">notifications</span>
                <div className="data ms-2">
                  <h6>Notifications</h6>
                  <p className="mb-0">
                    Turn on notifications for
                    this post
                  </p>
                </div>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default DotedDropdown