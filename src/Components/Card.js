import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Card = (props) => {
  return (
    // <div className="bg-gray-100 border-2 border-solid border-black rounded-md p-3">
    //   <h1 className="font-bold">{props.title}</h1>
    //   <p>{props.publisher}</p>
    //   <a className="text-blue-500" href={props.link}>
    //     Click here to read more...
    //   </a>
    <LinkPreview
      url={props.link}
      className="w-5/6 m-auto overflow-auto"
      height="85%"
      imageHeight="300px"
      descriptionLength={200}
    />
    // </div>
  );
};

export default Card;
