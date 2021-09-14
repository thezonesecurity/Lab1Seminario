import LogicGame from "./ChainOfR/LogicGame";

class GoodCards extends LogicGame {
  process(twice, item, stateBoard, setStateBoard) {
    //si card son ==
    const [item1, item2] = twice;
    const newStateBoard = stateBoard.map((item) => {
      if (item.id === item1.id || item.id === item2.id) {
        item.state = true;
        item.styles = "itemColor";
      }
      return item;
    });
    setStateBoard(newStateBoard);
  }
}
export default GoodCards;
