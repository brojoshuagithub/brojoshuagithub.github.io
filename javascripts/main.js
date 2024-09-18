import "bootstrap";
import { doc } from "prettier";

let initial_messages = [
  {
    who: "William Shakespeare",
    quote: "A rose by any other name would smell as sweet.",
  },
  {
    who: "William Shakespeare",
    quote: "All that glitters is not gold.",
  },
  {
    who: "William Shakespeare",
    quote: "All the world’s a stage, and all the men and women merely players.",
  },
  {
    who: "John Kennedy",
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
  },
  {
    who: "the Bible",
    quote: "Ask, and it shall be given you; seek, and you shall find.",
  },
  {
    who: "Woody Allen",
    quote: "Eighty percent of success is showing up.",
  },
  {
    who: "Sherlock Holmes (character)",
    quote: "Elementary, my dear Watson.",
  },
  {
    who: "the Bible",
    quote: "For those to whom much is given, much is required.",
  },
  {
    who: "Rhett Butler (character)",
    quote: "Frankly, my dear, I don't give a damn.",
  },
  {
    who: "Thomas Edison",
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
  },
  {
    who: "Harry Callahan (character)",
    quote: "Go ahead, make my day.",
  },
  {
    who: "Rudyard Kipling",
    quote: "He travels the fastest who travels alone.",
  },
  {
    who: "William Congreve",
    quote: "Hell has no fury like a woman scorned.",
  },
  {
    who: "Jean-Paul Sartre",
    quote: "Hell is other people.",
  },
  {
    who: "Rick Blaine (character)",
    quote: "Here's looking at you, kid.",
  },
  {
    who: "Jim Lovell (character)",
    quote: "Houston, we have a problem.",
  },
  {
    who: "Martin Luther King",
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
  },
  {
    who: "Blanche Dubois (character)",
    quote: "I have always depended on the kindness of strangers.",
  },
  {
    who: "Lt. Kilgore (character)",
    quote: "I love the smell of napalm in the morning.",
  },
  {
    who: "Rene Descartes",
    quote: "I think therefore I am.",
  },
  {
    who: "W. E. Hickson",
    quote: "If at first you don’t succeed, try, try again.",
  },
  {
    who: "Winston Churchill",
    quote: "If you are going through hell, keep going.",
  },
  {
    who: "Joe Jackson (character)",
    quote: "If you build it, they will come.",
  },
  {
    who: "Charles-Guillaume Étienne",
    quote: "If you want something done right, do it yourself.",
  },
  {
    who: "Margaret Thatcher",
    quote: "If you want something said, ask a man; if you want something done, ask a woman.",
  },
  {
    who: "Terminator (character)",
    quote: "I'll be back.",
  },
  {
    who: "Vito Corleone (character)",
    quote: "I'm gonna make him an offer he can't refuse.",
  },
  {
    who: "Dorothy (character)",
    quote: "I've got a feeling we're not in Kansas anymore.",
  },
  {
    who: "Michael Corleone (character)",
    quote: "Keep your friends close, but your enemies closer.",
  },
  {
    who: "Sir Francis Bacon",
    quote: "Knowledge is power.",
  },
  {
    who: "Forrest Gump (character)",
    quote: "Life is like a box of chocolates. You never know what you’re gonna get.",
  },
  {
    who: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    who: "Star Wars (many characters)",
    quote: "May the Force be with you.",
  },
  {
    who: "Eleanor Roosevelt",
    quote: "No one can make you feel inferior without your consent.",
  },
  {
    who: "J. R. R. Tolkein",
    quote: "Not all those who wander are lost.",
  },
  {
    who: "Benjamin Franklin",
    quote: "Nothing is certain except for death and taxes.",
  },
  {
    who: "William Shakespeare",
    quote: "Parting is such sweet sorrow",
  },
  {
    who: "John Dalberg-Acton",
    quote: "Power corrupts; absolute power corrupts absolutely.",
  },
  {
    who: "Theodore Roosevelt",
    quote: "Speak softly and carry a big stick.",
  },
  {
    who: "Neil Armstrong",
    quote: "That’s one small step for a man, a giant leap for mankind.",
  },
  {
    who: "the Bible",
    quote: "The love of money is the root of all evil.",
  },
  {
    who: "Franklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
  },
  {
    who: "the Bible",
    quote: "The truth will set you free.",
  },
  {
    who: "Dorothy (character)",
    quote: "There's no place like home.",
  },
  {
    who: "Benjamin Franklin",
    quote: "Three can keep a secret, if two of them are dead.",
  },
  {
    who: "Alfred Lord Tennyson",
    quote: "Tis better to have loved and lost than never to have loved at all.",
  },
  {
    who: "William Shakespeare",
    quote: "To be or not to be, that is the question.",
  },
  {
    who: "Alexander Pope",
    quote: "To err is human; to forgive, divine.",
  },
  {
    who: "William Shakespeare",
    quote: "To thine own self, be true.",
  },
  {
    who: "Robert Frost",
    quote: "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
  },
  {
    who: "Aesop",
    quote: "United we stand, divided we fall.",
  },
  {
    who: "Friedrich Nietzsche",
    quote: "What doesn't kill us makes us stronger.",
  },
  {
    who: "Captain (character)",
    quote: "What we've got here is failure to communicate. Some men you just can't reach.",
  },
  {
    who: "Abraham Lincoln",
    quote: "Whatever you are, be a good one.",
  },
  {
    who: "Abraham Lincoln",
    quote: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
  },
  {
    who: "Mahatma Ghandi",
    quote: "You must be the change you wish to see in the world.",
  },
  {
    who: "Bickle (character)",
    quote: "You talkin' to me?",
  }
];

function getMessages() {
  if (localStorage.getItem("messages") && localStorage.getItem("messages") !== "[]") {
    return JSON.parse(localStorage.getItem("messages"));
  } else {
    return initial_messages;
  }
}

let currentMessageIndex = 0;

windows.displayCurrentMessage = function() {
  let messages = getMessages();
  let currentMessage = messages[currentMessageIndex];
  let messages_html = `
    <div class="message col mb-3" data-ndx="${currentMessageIndex}">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="message-body">
            <h5 class="message-title">${currentMessage.who}</h5>
            <p class="message-text">${currentMessage.quote}</p>
            <p class="message-text">
              <button class="btn btn-primary to-delete">Switch</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelector("#messages").innerHTML = messages_html;

  document.querySelector(".to-delete").onclick = function (event) {
    if (confirm("Are you sure you want to switch to another quote?")) {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      displayCurrentMessage();
    }
  };

  hideForm();
}

//displayCurrentMessage();
