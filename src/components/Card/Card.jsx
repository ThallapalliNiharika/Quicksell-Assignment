import React from "react";
import "./Card.css";
import BacklogIcon from '../icons_FEtask/Backlog.svg';
import TodoIcon from '../icons_FEtask/To-do.svg';
import InProgressIcon from '../icons_FEtask/in-progress.svg';
import DoneIcon from '../icons_FEtask/Done.svg';
import CancelledIcon from '../icons_FEtask/Cancelled.svg';
import HighPriorityIcon from '../icons_FEtask/Img - High Priority.svg';
import MediumPriorityIcon from '../icons_FEtask/Img - Medium Priority.svg';
import LowPriorityIcon from '../icons_FEtask/Img - Low Priority.svg';
import UrgentPriorityIcon from '../icons_FEtask/SVG - Urgent Priority colour.svg';

const Card = ({ id = 'N/A', title = 'No Title', tag = [], status = 'Unknown', priority = 0 }) => {
    console.log({ id, title, tag, status, priority });

    return (
        <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
            <div className="cardHeading flex-sb">
                <span style={{ textTransform: "uppercase" }} className="color-grey">{id}</span>
                <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
                    <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="UserImage" />
                </div>
            </div>
            <div className="cardTitle" style={{ fontWeight: 200 }}>
                {status === "Backlog" && <img src={BacklogIcon} alt="Backlog" style={{ width: "14px", height: "14px" }} />}
                {status === "Todo" && <img src={TodoIcon} alt="To-do" style={{ width: "13px", height: "13px" }} />}
                {status === "In progress" && <img src={InProgressIcon} alt="In Progress" style={{ width: "14px", height: "14px" }} />}
                {status === "Done" && <img src={DoneIcon} alt="Done" style={{ width: "14px", height: "14px" }} />}
                {status === "Cancelled" && <img src={CancelledIcon} alt="Cancelled" style={{ width: "14px", height: "14px" }} />}
                <span style={{ margin: "0.2px" }}>{title}</span>
            </div>
            <div className="cardTags">
                <div className="tags color-grey">
                    {priority === 1 && <img src={LowPriorityIcon} alt="Low Priority" style={{ width: "30px", height: "30px" }} />}
                    {priority === 2 && <img src={MediumPriorityIcon} alt="Medium Priority" style={{ width: "30px", height: "30px" }} />}
                    {priority === 3 && <img src={HighPriorityIcon} alt="High Priority" style={{ width: "30px", height: "30px" }} />}
                    {priority === 4 && <img src={UrgentPriorityIcon} alt="Urgent Priority" style={{ width: "30px", height: "30px" }} />}
                </div>
                {tag.map((element, index) => (
                    <div key={index} className="tags color-grey">
                        <span>•</span> {element}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
