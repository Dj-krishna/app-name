import React, { useState } from "react";

function GridLayout() {
  const [order, setOrder] = useState([]);
  const [isDeactivated, setIsDeactivated] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const activateCells = (index) => {
    let newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);
    //de-activate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  const deactivateCells = () => {
    setIsDeactivated(true);
    const timer = setInterval(() => {
      // setIsDeactivated(true);
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivated(false);
        }
        return newOrder;
      });
    }, 400);
  };
  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((_values, _index) => {
          return _values ? (
            <Cell
              key={_index}
              filled={order.includes(_index)}
              onClick={() => activateCells(_index)}
              isDisabled={order.includes(_index)}
              label={`Cell ${_index}`}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}

export default GridLayout;

function Cell({ filled, onClick, isDisabled, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={filled ? "cell cell-activated" : "cell"}
      onClick={onClick}
      disabled={isDisabled}
    ></button>
  );
}
