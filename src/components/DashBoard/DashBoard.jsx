import React from "react";
import { useSelector } from "react-redux";
import "./DashBoard.css";
import Card from "../Card/Card";

import { ReactComponent as BacklogIcon } from "../icons_FEtask/Backlog.svg";
import { ReactComponent as TodoIcon } from "../icons_FEtask/To-do.svg";
import { ReactComponent as InProgressIcon } from "../icons_FEtask/in-progress.svg";
import { ReactComponent as DoneIcon } from "../icons_FEtask/Done.svg";
import { ReactComponent as CancelledIcon } from "../icons_FEtask/Cancelled.svg";
import { ReactComponent as MediumPriorityIcon } from "../icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as HighPriorityIcon } from "../icons_FEtask/Img - High Priority.svg";
import { ReactComponent as UrgentPriorityIcon } from "../icons_FEtask/SVG - Urgent Priority colour.svg";
import { ReactComponent as NoPriorityIcon } from "../icons_FEtask/No-priority.svg";
import { ReactComponent as LowPriorityIcon } from "../icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as ThreeDotMenu } from "../icons_FEtask/3 dot menu.svg";
import { ReactComponent as AddIcon } from "../icons_FEtask/add.svg";

const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";

  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ display: "flex", justifyContent: "space-around" }}>
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div key={index} className="dashCardContainer" style={{ width: `${cardWidthPercentage}%` }}>
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: "10px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                      {/* User Image placeholder */}
                    </div>
                  ) : isStatus ? (
                    <div
                      className="cardTitle"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                        fontWeight: 200,
                      }}
                    >
                      {element[index].title === "Backlog" ? (
                        <BacklogIcon style={{ width: "13px" }} />
                      ) : element[index].title === "Todo" ? (
                        <TodoIcon style={{ width: "13px", color: "#ddeded" }} />
                      ) : element[index].title === "In progress" ? (
                        <InProgressIcon style={{ width: "13px", color: "#f2d750" }} />
                      ) : element[index].title === "Done" ? (
                        <DoneIcon />
                      ) : (
                        <CancelledIcon />
                      )}
                    </div>
                  ) : isPriority ? (
                    <div
                      className="tags color-grey"
                      style={{
                        width: "35px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    >
                      {element[index].title === "Low" ? (
                        <LowPriorityIcon />
                      ) : element[index].title === "Medium" ? (
                        <MediumPriorityIcon />
                      ) : element[index].title === "High" ? (
                        <HighPriorityIcon />
                      ) : element[index].title === "Urgent" ? (
                        <UrgentPriorityIcon />
                      ) : (
                        <NoPriorityIcon />
                      )}
                    </div>
                  ) : (
                    <CancelledIcon />
                  )}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <AddIcon style={{ marginRight: "5px" }} />
                  <ThreeDotMenu style={{ letterSpacing: "2px" }} />
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((item, ind) => (
                  <Card
                    key={ind}
                    id={item.id}
                    title={item.title}
                    tag={item.tag}
                    status={item.status}
                    priority={item.priority}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashBoard;
