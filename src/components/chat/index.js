import React from "react";
import styles from "./styles.module.css";
import { IMAGES } from "../../jsx/constant/theme";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";
const Chat = ({ openMsg ,offMsg}) => {

  const emailSplitFunction = (email) => {
    let emailSplit = email.split("@");
    return emailSplit[0];
  }

  return (
    <div
    className={`card chatbox chat dlab-chat-history-box chat-history-card ${openMsg ? "" : "d-none"}`}
  >
    <div className="card-header chat-list-header text-center">
      <div className="cr-pointer"  onClick={() => offMsg()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <polygon points="0 0 24 0 24 24 0 24" />
            <rect
              fill="#000000"
              opacity="0.3"
              transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
              x="14"
              y="7"
              width="2"
              height="10"
              rx="1"
            />
            <path
              d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
              fill="#000000"
              fillRule="nonzero"
              transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
            />
          </g>
        </svg>
      </div>

      <div>
        <h6 className="mb-1">Chat with Ajith</h6>
        <p className="mb-0 text-success">Online</p>
      </div>
      <div className="dropdown">

      </div>
    </div>
    <div
      className={`card-body msg_card_body  dz-scroll ${openMsg ? "ps ps--active-y" : ""
        } `}
      id="DZ_W_Contacts_Body3"
    >
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          Hi, how are you samim?
          <span className="msg_time">8:40 AM, Today</span>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          Hi Khalid i am good tnx how about you?
          <span className="msg_time_send">8:55 AM, Today</span>
        </div>
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          I am good too, thank you for your chat template
          <span className="msg_time">9:00 AM, Today</span>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          You are welcome
          <span className="msg_time_send">9:05 AM, Today</span>
        </div>
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          I am looking for your next templates
          <span className="msg_time">9:07 AM, Today</span>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          Ok, thank you have a good day
          <span className="msg_time_send">9:10 AM, Today</span>
        </div>
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          Bye, see you
          <span className="msg_time">9:12 AM, Today</span>
        </div>
      </div>
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          Hi, how are you samim?
          <span className="msg_time">8:40 AM, Today</span>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          Hi Khalid i am good tnx how about you?
          <span className="msg_time_send">8:55 AM, Today</span>
        </div>
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          I am good too, thank you for your chat template
          <span className="msg_time">9:00 AM, Today</span>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          You are welcome
          <span className="msg_time_send">9:05 AM, Today</span>
        </div>
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          I am looking for your next templates
          <span className="msg_time">9:07 AM, Today</span>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          Ok, thank you have a good day
          <span className="msg_time_send">9:10 AM, Today</span>
        </div>
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <Image src={IMAGES.profileImage} />
        </div>
        <div className="msg_cotainer">
          Bye, see you
          <span className="msg_time">9:12 AM, Today</span>
        </div>
      </div>
    </div>
    <div className="card-footer type_msg">
      <div className="input-group">
        <textarea
          className="form-control"
          placeholder="Type your message..."
        ></textarea>
        <div className="input-group-append">
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon
              icon={
                faLocationArrow
              }
              style={{
                color:
                  "#fff",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Chat;