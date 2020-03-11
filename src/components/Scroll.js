import React from "react";

function Scroll (props) {

  return(
    <div>
          {
            window.addEventListener("scroll", () => {props.scrollHandler(window.scrollY)
            })
          }


    </div>
  )

}

export default Scroll;