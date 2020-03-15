import React from "react";
import { useSwipeable } from "react-swipeable";
import {
  WrapperSwipe,
  CarouselContainer,
  CarouselSlot,
  SlideButton,
  PREV,
  NEXT
} from "components/Styling"

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT };

export const Swipe = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);


  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };


  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });


  return (
    <div {...handlers}>
      <WrapperSwipe>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
        <SlideButton onClick={() => slide(PREV)} float="left">
          Prev
      </SlideButton>
        <SlideButton onClick={() => slide(NEXT)} float="right">
          Next
      </SlideButton>
      </WrapperSwipe>
    </div>
  );
};

function reducer(state, { type, numItems }) {
  switch (type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        // pos: state.pos === 0 ? numItems - 1 : state.pos - 1
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1

      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}


//SWIPER STYLING
export const NEXT = "HEJ";
export const PREV = "HEJDÅ";

export const AppContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const Item = styled.div`
  text-align: center;
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-80% - 20px))";
    if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
    return "translateX(0%)";
  }};
`;

export const WrapperSwipe = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%; /* Decides how many cards on one row */
  flex-basis: 80%; /* Decides how many cards on one row */
  margin-right: 20px;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  padding: 10px;
  background-color: #f66f3e;
  border: 1px solid white;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  /* float: ${props => props.float}; */

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;