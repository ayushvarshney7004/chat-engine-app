/* eslint-disable react/prop-types */
import { PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const Header = ({ chat }) => {
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        <p className="header-text">{chat.description}</p>
      </div>
    </div>
  );
};
export default Header;
