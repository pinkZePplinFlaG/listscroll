import React, { Component } from "react";
import styled from "styled-components";
import { defineSwipe, Swipeable } from "react-touch";
import * as Scroll from "react-scroll";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import * as c from "./components.js";
const swipe = defineSwipe({ swipeDistance: 50 });

const item = i => {
  return {
    component: (
      <div>
        <h3>List Item # {i}</h3>
      </div>
    )
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { id: "one" },
        { id: "two" },
        { id: "three" },
        { id: "four" },
        { id: "five" },
        { id: "six" },
        { id: "seven" },
        { id: "eight" },
        { id: "nine" },
        { id: "ten" },
        { id: "eleve " },
        { id: "twelve" },
        { id: "thirteen" },
        { id: "fourteen" }
      ],

      viewOnStrip: 0,
      selectedIndex: false,
      message: "",
      scroll: true
    };
    this.swipe = this.swipe.bind(this);
    this.scrollElementToMiddle = this.scrollElementToMiddle.bind(this);
  }

  swipe(i, direction) {
    const cards = this.state.cards;

    if (!cards[i].strip) {
      cards[i].strip = 0;
    }

    let strip;
    if (direction === "right") {
      strip = cards[i].strip >= 1 ? 1 : cards[i].strip + 1;
    } else if (direction === "left") {
      strip = cards[i].strip - 1 <= -1 ? -1 : cards[i].strip - 1;
    }
    const card = { id: cards[i].id, strip: strip };
    const selected = card.strip === 0 ? false : i;
    cards[i] = card;

    const element = document.getElementById("id-" + i);
    this.scrollElementToMiddle(element);

    this.setState({
      selectedIndex: selected,
      cards: cards,
      viewOnStrip: card.strip * -1
    });
  }

  scrollElementToMiddle(element) {
    scroller.scrollTo(element.id, {
      duration: 500,
      offset: -200,
      smooth: "easeInOutCubic",
      containerId: "view"
    });
  }

  render() {
    const { cards, selectedIndex, viewOnStrip } = this.state;
    const slideAside = selectedIndex === false;
    console.log(cards);

    const items = [...Array().keys()].map(i => item(i));

    console.debug("SlideAside: " + slideAside);
    return (
      <div>
        <c.Container>
          <c.ViewPort />
          <c.Hidden />
          <c.Hidden row top />
          <c.Hidden row bottom />
          <c.View id={"view"} slideAside={slideAside} slideTo={viewOnStrip}>
            {this.state.cards.map((item, i) => {
              const selected = i === selectedIndex;
              console.debug(i + " == " + selectedIndex + " : " + selected);
              const card = (
                <c.Card
                  id={`id-${i}`}
                  key={i}
                  selected={selected}
                  strip={item.strip}
                >
                  id-{i}
                </c.Card>
              );

              return (
                <Swipeable
                  config={swipe}
                  onSwipeLeft={() => this.swipe(i, "left")}
                  onSwipeRight={() => this.swipe(i, "right")}
                >
                  {card}
                </Swipeable>
              );
            })}
          </c.View>
          <c.Hidden right />
        </c.Container>
      </div>
    );
  }
}

export default App;
