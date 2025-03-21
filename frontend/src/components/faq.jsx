import React from "react";
import { useState } from "react";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";

function faq() {
  //initializes a state variable named "active" and a function to update it as "setActive" using the useState hook, intial value is set to false
  const [active, setActive] = useState(false);

  //array of data to be displayed in the FAQ section that contains objects
  const data = [
    {
      intro: "What is MedPronunciation AI, and how will it help me?",
      pg: "MedPronounciation AI is a tool that helps healthcare professionals learn to pronounce medical terminology correctly. It uses AI to provide feedback on your pronunciation, helping you improve your skills and communicate more effectively with patients and colleagues.",
      id: 1,
    },
    {
      intro: "Is MedPronunciation AI Free?",
      pg: "Yes, MedPronunciation AI is free to use. You can sign up for an account and start using the tool right away.",
      id: 2,
    },
    {
      intro: "Can I use MedPronunciation AI to study?",
      pg: "Yes, you can use MedPronunciation AI to study medical terminology and improve your pronunciation skills. The tool provides feedback on your pronunciation and helps you identify areas for improvement.",
      id: 3,
    },
    {
      intro: "How can I get help if I'm stuck on a MedPronunciation AI? ",
      pg: "If you're stuck on a MedPronunciation AI quiz, you can reach out to our support team for help. They can provide guidance on how to complete the quiz and improve your pronunciation skills.",
      id: 4,
    },
  ];

  //returns the JSX structure of the component
  return (
    <>
          <div className="w-full h-full flex justify-center items-center font-roboto">
          <div className="w-[400px] h-[600px] md:w-[600px] md:h-[800px] z-10 rounded-lg flex flex-col p-3 text-black bg-white overflow-y-auto">
          <div className="flex flex-row justify-center items-center my-4">
            <h1 className="font-bold text-black text-3xl md:text-4xl">FAQS</h1>
          </div>
          <div className="flex flex-col gap-4">
            {/* iterates over each item in the data array - for each item the function returns JSX */}
            {data.map((item) => (
              // key prop is required for each child in a list
              <div key={item.id}>
                <div className="flex justify-between p-2 hover:text-custom-bright-orange items-center">
                <h1 className="text-lg font-bold w-[75%] md:w-[90%] leading-6 tracking-wide mb-2 cursor-pointer">
                    {item.intro}
                  </h1>
                  {/* image to serve as button to toggle active state */}
                  <img
                    src={active === item.id ? Minus : Plus }
                    alt="icon"
                    className="w-6 h-6 cursor-pointer"
                    // onClick event handler to toggle active state
                    onClick={() => active === item.id ? setActive(0) : setActive(item.id)}/>

                </div>
                {/* conditional rendering block that checks if the current item is the active one */}
                {active === item.id ? (
                  <p className="w-full flex justify-center items-center text-custom-grey p-2">{item.pg}</p>
                ) : (
                  <p></p>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default faq;