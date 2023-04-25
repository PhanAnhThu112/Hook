import React, { useState } from "react";

function Drinkmenu() {
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [money, setMoney] = useState("");
  const [quantity, setQuantity] = useState(1); // new state for quantity

  const checkOrder = (money) => {
    const total = price * quantity; // calculate total based on quantity
    if (money >= total) {
      alert(
        "Đồ uống của bạn đây " +
          type +
          "\nSố lượng: " +
          quantity +
          "\nTổng tiền: " +
          total +
          "đ\nSố Tiền dư: " +
          (money - total) +
          "đ"
      );
    } else {
      alert("Không đủ tiền");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (price === 0) {
      alert("vui lòng chọn đồ uống");
    } else {
      if (money === "") {
        alert("vui lòng nhập số tiền của bạn");
      } else {
        checkOrder(parseInt(money));
      }
    }
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
    if (value === "Caffe sữa") {
      setPrice(1200);
    } else if (value === "Caffe đá") {
      setPrice(1000);
    } else if (value === "Sting dâu") {
      setPrice(800);
    } else {
      setPrice(2000);
    }
  };

  const handleMoneyChange = (event) => {
    const value = event.target.value;
    if (!Number(value)) {
      alert("nhập số vào");
    }
    setMoney(value);
  };

  const handleQuantityChange = (event) => {
    // new handler for quantity
    const value = event.target.value;
    setQuantity(parseInt(value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Mời bạn chọn thức uống</td>
              <td>
                <select name="type" value={type} onChange={handleTypeChange}>
                  <option selected hidden>
                    Mời chọn
                  </option>
                  <option value="Caffe sữa">Caffee sữa</option>
                  <option value="Caffe đá">Caffee đá</option>
                  <option value="Sting dâu">Sting dâu</option>
                  <option value="Trà đá">Trà đá</option>
                </select>
              </td>
              <td>
                <label>Price-----------{price}</label>
              </td>
            </tr>
            <tr>
              <td>Mời bạn chọn số lượng</td>
              <td>
                <select
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Nhập số tiền của bạn</td>
              <td>
                <input type="text" value={money} onChange={handleMoneyChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button type="submit">Đặt hàng</button>
      </form>
    </div>
  );
}

export default Drinkmenu;
