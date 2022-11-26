import styled from 'styled-components';

const vWidth = 30;


export const Card = styled.div`
  opacity: 0.4;
  position:  ${props =>
    props.selected ?
      'relative'
      : 'sticky'
  };
  top: ${props =>
    props.selected ?
      '0'
      : 'auto'
  };
  width: 100%;
  height:${props =>
    props.selected ?
      '50vh'
      : '100px'
  }
  ;
  background-color:  ${props =>
    props.selected ?
      'green'
      : 'red'
  }
  margin-bottom: 6px;
  transform: ${props =>
    props.selected ?
      `translateX(${props.strip * vWidth}vw)`
      : null
  };
  transition: 
    transform .5s ease-in-out,
    height 1s ease-in-out 1s, 
    background-color .5s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow: hidden;
`;

export const View = styled.div`
  
  margin-left: 1em;
  padding: 20vh 35vw;
  background: rgba(0,100,100,.1);
  position: relative;
  width: 30vw;
  height: 60vh;
  transform: ${props => `translateX(${(props.slideTo) * vWidth}vw)`};
  transition: all .5s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;
  
`;

export const Hidden = styled.div`
 position: fixed;
  left: ${props => props.right ? '65vw' : 0};
  bottom: ${props => props.bottom ? 0 : 'auto'};
  width: ${props => props.row ? '100vw' : '35vw'};
  height: ${props => props.row ? '20vh' : '100vh'};
  background: rgba(100,100,100,.5);
`;

export const ViewPort = styled.div`
    position: fixed;
   border: dotted 6px black;
   width: 30vw;
   height: 55vh;
   overflow-x: visible;
    margin: 20vh 34vw;
    transform: translateX(-4px);
`;

export const Message = styled.div`
    position: fixed;
    top: 20px;
    left: 2em;
    width: 30vw;
    height: 100px;
    background: #fafafa;
    overflow-x: visible;
`;