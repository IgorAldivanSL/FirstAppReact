// ============================================================
// IMPORTAÇÕES
// ============================================================

// Importa a imagem do logo do React
import ReactLogo from './assets/logo.png';

// Importa o hook useState para controlar o estado do componente
import { useState } from "react";

// Importa os estilos CSS da aplicação
import "./styles.css";


// ============================================================
// CONTEÚDO DAS ABAS
// ============================================================

// Cada array representa o conteúdo de uma aba:
//
// 0 → Why React?
// 1 → Core Features
// 2 → Related Resources
// 3 → React vs JS

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],

  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],

  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],

  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];


// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function App() {

  // ----------------------------------------------------------
  // ESTADO
  // ----------------------------------------------------------

  // Guarda qual aba está atualmente selecionada.
  //
  // 0 → Why React?
  // 1 → Core Features
  // 2 → Related Resources
  // 3 → React vs JS
  //
  // O valor inicial é 0, portanto a primeira aba
  // aparece selecionada quando a aplicação inicia.

  const [activeContentIndex, setActiveContentIndex] = useState(0);


  // ----------------------------------------------------------
  // JSX
  // ----------------------------------------------------------

  return (
    <div>

      {/* ======================================================
          CABEÇALHO
          ====================================================== */}

      <header>

        {/* Logo do React */}
        <img src={ReactLogo} alt="React logo" />

        <div>

          {/* Título principal */}
          <h1>React.js</h1>

          {/* Descrição */}
          <p>
            i.e., using the React library for rendering the UI
          </p>

        </div>
      </header>


      {/* ======================================================
          ÁREA DAS ABAS
          ====================================================== */}

      <div id="tabs">

        {/* ----------------------------------------------------
            BOTÕES DAS ABAS
            ---------------------------------------------------- */}

        <menu>

          {/* Aba: Why React? */}
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>


          {/* Aba: Core Features */}
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>


          {/* Aba: Related Resources */}
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>


          {/* Aba: React vs JS */}
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs JS
          </button>

        </menu>


        {/* ====================================================
            CONTEÚDO DA ABA SELECIONADA
            ==================================================== */}

        <div id="tab-content">

          <ul>

            {/*
              Seleciona o conteúdo correspondente à aba ativa.

              Exemplo:
              activeContentIndex = 0
              → content[0]

              activeContentIndex = 1
              → content[1]

              Depois usamos .map() para transformar cada
              item do array em um elemento <li>.
            */}

            {content[activeContentIndex].map((item) => (

              // "key" permite que o React identifique cada
              // elemento da lista de forma eficiente.
              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}