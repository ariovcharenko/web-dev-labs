// Arina Ovcharenko - Lab 9

// Lab 7 basics
const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

// Part 2: build the goals list from an array
const goals = [
  "Learn modern front-end development",
  "Build real-world web projects",
  "Get comfortable with Git and GitHub workflows"
];
const goalsList = document.querySelector("#goals-list");

if (goalsList) {
  goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
  });
} else {
  console.warn("goals-list not found on this page");
}

// Parts 1, 3 and 5: like counter
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");

// Part 5: related state and behavior grouped in one object
const LikeCounter = {
  likes: 0,
  increment() {
    this.likes = this.likes + 1;
    this.render();
  },
  render() {
    updateLikeDisplay(this.likes);
  }
};

// Parts 1 and 3: each function does one job
function incrementLikes() {
  LikeCounter.increment();
}

function updateLikeDisplay(count) {
  if (!likeCount || !likeMessage) {
    console.warn("like-count or like-message not found on this page");
    return;
  }

  likeCount.textContent = `${count} likes`;

  if (count >= 10) {
    likeMessage.textContent = "Wow, thanks for all the likes!";
  } else if (count >= 5) {
    likeMessage.textContent = "Glad you like it!";
  } else {
    likeMessage.textContent = "";
  }
}

// Part 4: check that the button exists before using it
if (likeBtn) {
  likeBtn.addEventListener("click", incrementLikes);
} else {
  console.warn("like-btn not found on this page");
}

// Dark mode toggle (Lab 7)
const themeBtn = document.querySelector("#theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
  });
} else {
  console.warn("theme-btn not found on this page");
}

// Parts 2 and 3: Promise and async/await
function getGreetingAfterDelay() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Hello from the future!");
    }, 800);
  });
}

// Part 2: consume the Promise with .then
getGreetingAfterDelay().then(function(message) {
  console.log(message);
});

// Part 3: same thing with async/await
async function showGreeting() {
  const message = await getGreetingAfterDelay();
  console.log(message);
}
showGreeting();

// Part 4: fetch a random fact with loading and error states
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

async function loadFact() {
  factDisplay.textContent = "Loading...";

  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Server responded with an error");
    }

    const data = await response.json();
    factDisplay.textContent = data.fact;
  } catch (error) {
    factDisplay.textContent = "Couldn't load a fact right now. Try again.";
    console.error(error);
  }
}

if (factBtn && factDisplay) {
  factBtn.addEventListener("click", loadFact);
} else {
  console.warn("fact-btn or fact-display not found on this page");
}
