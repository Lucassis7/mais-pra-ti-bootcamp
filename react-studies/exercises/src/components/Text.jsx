import { useState } from "react";

function Text() {
  const [currentText, setCurrentText] = useState("");

  const onHandleChange = (event) => {
    setCurrentText(event.target.value);
  };

  return (
    <div>
      <textarea
        name="textareaContent"
        id="textareaContent"
        value={currentText}
        onChange={onHandleChange}
      ></textarea>
      <p>{currentText}</p>
    </div>
  );
}

export default Text;
