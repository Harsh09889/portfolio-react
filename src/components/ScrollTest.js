import { useEffect, useState } from "react";

export default function App(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if(position>200){
      props.setTitleDisplay(1.5)
      console.log("I am now greater than 200")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    };
  }, []);


  


  return (
    <div className={`App ${props.titleDisplay} `}>
      {Array(200)
        .fill()
        .map((_, i) => (
          <p key={i}>lorem ipsum {scrollPosition}</p>
        ))}
    </div>
  );
}