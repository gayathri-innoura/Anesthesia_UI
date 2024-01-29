import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import completed from "../../../../images/dashboard/completed.png";
import calender from "../../../../images/dashboard/calender.png";
import Card from "../../../../components/card";
import allocated from "../../../../images/dashboard/allocated.png";
import pending from "../../../../images/dashboard/pending.png";
import hold from "../../../../images/dashboard/hold.png";
import { Col, Row } from "antd";
import HeadTitle from "../../../../components/headtitle";
import holdbg from "../../.../../../../images/dashboard/WorkFlow2.png";
import allocatedbg from "../../.../../../../images/dashboard/workFlow0.png";
import pendingbg from "../../.../../../../images/dashboard/workFlow1.png";
import completedbg from "../../.../../../../images/dashboard/workFlow3.png";
import completedbg1 from "../../.../../../../images/dashboard/workFlow4.png";
import completedbg2 from "../../.../../../../images/dashboard/workFlow5.png";
import { useSelector } from "react-redux";

const WorkFlow = () => {
  const worlFlowData = useSelector((state) => state?.workFlow?.data);
 
  const [openPicker, setOpenPicker] = useState(false);
  const handleOpen = () => {
    setOpenPicker(!openPicker);
  };
  const card1Data = [
    {
      id: 1,
      icon: allocated,
      title: "Files",
      charts: worlFlowData?.response?.allocated,
      days: "Last 30 days",
      bg: allocatedbg,
    },
    {
      id: 2,
      icon: pending,
      title: "Files Record",
      charts: worlFlowData?.response?.pending,
      days: "Last 30 days",
      bg: pendingbg,
    },
    {
      id: 3,
      icon: hold,
      title: "Completed",
      charts: worlFlowData?.response?.hold,
      days: "Last 30 days",
      bg: holdbg,
    },
    {
      id: 4,
      icon: completed,
      title: "Pending",
      charts: worlFlowData?.response?.completed,
      days: "Last 30 days",
      bg: completedbg,
    },
    {
      id: 5,
      icon: completed,
      title: "Hold",
      charts: worlFlowData?.response?.completed,
      days: "Last 30 days",
      bg: completedbg1,
    },
    {
      id: 6,
      icon: completed,
      title: "Reject",
      charts: worlFlowData?.response?.completed,
      days: "Last 30 days",
      bg: completedbg2,
    },
  ];

  return (
    <div className={styles.card1}>
      <HeadTitle
        header="Last 30 days work flow "
        icon={calender}
        handleOpen={handleOpen}
        openPicker={openPicker}
        setOpenPicker={setOpenPicker}
      />
      <Card borderRadius="28px">
        <Row className={styles.carddiv}>
          {card1Data?.map((data) => (
            <Col
              span={10}
              style={{
                backgroundImage: `url(${data?.bg.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className={styles.colData}
            >
              <div className={styles.header}>
                <Image src={data?.icon} className={styles.Img} />
                <div className={styles.heading}>{data.title}</div>
              </div>
              <div className={styles.charts}>{`${
                data?.charts ? data?.charts : "0"
              }  Charts`}</div>
              <div className={styles.days}>{data.days}</div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default WorkFlow;
