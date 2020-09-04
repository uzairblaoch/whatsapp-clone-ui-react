import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/p960x960/116103030_111368333995134_8999420941419395567_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=ooenRussS60AX_I7Rmh&_nc_ht=scontent.fkhi6-1.fna&tp=6&oh=8e28f8613f49919873981147a1f9a6bb&oe=5F790B01" />
      <div className="sidebarChat__info">
        <h2>Person Name</h2>
        <p>This is a last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
