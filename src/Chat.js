import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  SettingsInputAntenna,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/p960x960/116103030_111368333995134_8999420941419395567_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=ooenRussS60AX_I7Rmh&_nc_ht=scontent.fkhi6-1.fna&tp=6&oh=8e28f8613f49919873981147a1f9a6bb&oe=5F790B01" />
        <div className="chat__headerInfo">
          <h3>Person Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">ARUM</span>
          this is a message
          <span className="chat__timespan">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">ARUM</span>
          this is a message
          <span className="chat__timespan">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">ARUM</span>
          this is a message
          <span className="chat__timespan">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">ARUM</span>
          this is a message
          <span className="chat__timespan">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">ARUM</span>
          this is a message
          <span className="chat__timespan">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">ARUM</span>
          this is a message
          <span className="chat__timespan">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
