import { useState } from "react";

function Navigation() {
  const contentOne = `React is extremely popular
    It makes building complex, interactive UIs a breeze
    It's powerful & flexible
    It has a very active and versatile ecosystem`;
  const contentTwo = `Components, JSX & Props
    State
    Hooks (e.g., useEffect())
    Dynamic rendering`;
  const contentThree = `Official web page (react.dev)
    Next.js (Fullstack framework)
    React Native (build native mobile apps with React)`;
  const contentFour = `Vanilla JavaScript requires imperative programming
    Imperative Programming: You define all the steps needed to achieve a result
    React on the other hand embraces declarative programming
    With React, you define the goal and React figures out how to get there`;

  const [content, setContent] = useState("");

  return (
    <div>
      <h3>Navegação por abas</h3>
      <div>
        <button onClick={() => setContent(contentOne)}>Why React?</button>
        <button onClick={() => setContent(contentTwo)}>Core Features</button>
        <button onClick={() => setContent(contentThree)}>
          Related Resources
        </button>
        <button onClick={() => setContent(contentFour)}>React vs JS</button>
      </div>
      <div>
        <ul>
          {content.split("\n").map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
