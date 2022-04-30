import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "CAP 1 paragrafo 1",
      cover:
        "https://www.linkpicture.com/q/Screenshot-2022-04-30-at-16.45.59.png",
      artist: "Funzionalismo e spiegazione funzionale",
      audio: "https://drive.google.com/uc?export=download&id=1AKq-83vif1VDfUWK536HYLKRndn4F7jM",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "CAP 1 paragrafo 2",
      cover:
        "https://www.linkpicture.com/q/Screenshot-2022-04-30-at-16.45.59.png",
      artist: "Funzionalismo: gli antecedenti storici.",
      audio: "https://drive.google.com/uc?export=download&id=1fr10Oohg6HSQ_OeSofwewMq7rANdZcQe",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "CAP 1 paragrafo 3 (p.1)",
      cover:
        "https://www.linkpicture.com/q/Screenshot-2022-04-30-at-16.45.59.png",
      artist: "Il funzionalismo contemporaneo. (parte 1)",
      audio: "https://drive.google.com/uc?export=download&id=1EnSR_m_bh8UqV04eexaX7yhhsPjn__1T",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "CAP 1 paragrafo 3 (p.2)",
      cover:
        "https://www.linkpicture.com/q/Screenshot-2022-04-30-at-16.45.59.png",
      artist: "Il funzionalismo contemporaneo. (parte 2)",
      audio: "https://drive.google.com/uc?export=download&id=1ZiBgsHdZpVisXOA0-8T5XuI2Lo6QvNA9",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "CAP 1 paragrafo 4",
      cover:
        "https://www.linkpicture.com/q/Screenshot-2022-04-30-at-16.45.59.png",
      artist: "Il lessico della filosofia della mente.",
      audio: "https://drive.google.com/uc?export=download&id=1OisBvFt4N4DY8cQ4gj6qZcc7dz1jJ6xD",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "CAP 2 paragrafo 1",
      cover:
        "https://www.linkpicture.com/q/Screenshot-2022-04-30-at-16.45.59.png",
      artist: "Il concetto di qualia.",
      audio: "https://drive.google.com/uc?export=download&id=1U6OG0B1vShtbU_GlGunoyfwwJiUQTqSN",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },

    // comment 
    // {
    //   name: "Under the City Stars",
    //   cover:
    //     "https://www.linkpicture.com/q/Screenshot-2022-04-30-at-16.45.59.png",
    //   artist: "Aso, Middle School, Aviino",
    //   audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    //   color: ["#205950", "#2ab3bf"],
    //   id: uuidv4(),
    //   active: false,
    // },
    //ADD MORE HERE
  ];
}

export default chillHop;