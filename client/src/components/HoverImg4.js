import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg4 = ({pic4, swatch4, img4Index, onMouseOver, i4, onMouseMain4, onMouseMainLeave4, mouseClick, cBox}) => {

  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i4 ? <img
          className="hoverMainImg hovPic4"
          src={pic4[img4Index].slice(2,3)}
          alt="Hover Image"
          id="i4"
          onMouseOver={onMouseMain4}
          onMouseOut={onMouseMainLeave4}
        /> : <img
        className="hoverMainImg hovPic4"
        src={pic4[img4Index].slice(3,4)}
        alt="Hover Image"
        id="i4"
        onMouseOver={onMouseMain4}
        onMouseOut={onMouseMainLeave4}
        />}
        <div className="swatch-bg">
          <button className="svgButton" onClick={mouseClick}><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <div className="shield">
          <div  className={cBox ? "slide-left colorBox" : "slide-right colorBox "}>
          {swatch4.map((img, index) => (
              <img
              className={`swatchImg hoverbox${index + 1} img4`}
              src={swatch4[index].slice(1, 2)}
              alt="swatch Image"
              name={index}
              id="img4"
              onMouseOver={(e) => onMouseOver(e)}
              key={index}
            />
            ))}
          </div>
          </div>
          <button className="svgButton rbttn" onClick={mouseClick}><FaAngleRight className="svgIcon" size={30} color="#7f7f7f" /></button>
        </div>
      </div>
    </div>
  )
}



export default HoverImg4;