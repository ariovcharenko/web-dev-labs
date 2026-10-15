// Arina Ovcharenko - Lab 8

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
