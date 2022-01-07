import React, { useState, useEffect } from "react";
import Board from "react-trello";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";

const Goals = () => {
  const [data, setData] = useState({});
  const { currentUser } = useAuth();

  const defaultData = {
    lanes: [
      {
        id: "lane1",
        title: "Planned",
        cards: [],
      },
      {
        id: "lane2",
        title: "Pending",
        cards: [],
      },
      {
        id: "lane3",
        title: "Completed",
        cards: [],
      },
    ],
  };

  const defaultDataString = JSON.stringify(defaultData);

  useEffect(() => {
    async function fetchData() {
      const info = await db.collection("boards").doc(currentUser.uid).get();
      //   console.log(info.data()); //returns undefined if doesnt exist

      if (info.data() === undefined) {
        db.collection("boards")
          .doc(currentUser.uid)
          .set({
            uid: currentUser.uid,
            lanes: defaultDataString,
          })
          .then((docRef) => {
            //console.log(docRef);
          })
          .catch((error) => {
            //console.log(error);
          });
        setData(JSON.parse(defaultDataString));
      } else {
        const lanesFromDB = info.data().lanes;
        // console.log(lanesFromDB);
        const newObj = lanesFromDB;
        // console.log("Printing object from firestore: ");
        // console.log("newObj" + typeof newObj);
        setData(newObj);
      }
    }
    fetchData();
  }, []);

  const shouldReceiveNewData = (nextData) => {
    console.log("Board has changed");
    setData(nextData);
    db.collection("boards").doc(currentUser.uid).update({
      lanes: nextData,
    });
  };

  const handleCardDelete = (cardId, laneId) => {
    console.log(`Card: ${cardId} deleted from lane: ${laneId}`);
  };

  const handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
    console.log(card);
  };

  function isDataEmpty() {
    if (Object.keys(data).length !== 0) {
      //   console.log(true);
      return (
        <Board
          style={{ backgroundColor: "white" }}
          data={data}
          laneDraggable
          editable
          onDataChange={shouldReceiveNewData}
          onCardDelete={handleCardDelete}
          onCardAdd={handleCardAdd}
        />
      );
    } else {
      //   console.log("test");
      return <h1>No data yet</h1>;
    }
  }

  //   const data1 = {
  //     lanes: [
  //       {
  //         id: "lane1",
  //         title: "Planned",
  //         label: "2/2",
  //         cards: [
  //           {
  //             id: "Card1",
  //             title: "Write Blog",
  //             description: "Can AI make memes",
  //             label: "",
  //           },
  //           {
  //             id: "Card2",
  //             title: "Pay Rent",
  //             description: "Transfer via NEFT",
  //             label: "",
  //             metadata: { sha: "be312a1" },
  //           },
  //         ],
  //       },
  //       {
  //         id: "lane2",
  //         title: "Pending",
  //         label: "0/0",
  //         cards: [],
  //       },
  //       {
  //         id: "lane3",
  //         title: "Completed",
  //         label: "0/0",
  //         cards: [],
  //       },
  //     ],
  //   };

  return (
    <>
      <h2 className="mt-8 mb-4 font-bold text-2xl text-center">Goals</h2>
      <div className="h-screen flex items-center justify-center">
        {/* <Board
          style={{ backgroundColor: "white" }}
          data={data}
          laneDraggable
          editable
          onDataChange={shouldReceiveNewData}
          onCardDelete={handleCardDelete}
          onCardAdd={handleCardAdd}
        /> */}
        {isDataEmpty()}
      </div>
    </>
  );
};

export default Goals;
