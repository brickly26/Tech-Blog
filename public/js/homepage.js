const renderComments = () => {
  return function () {
    const postState = this.children[2].style.display;
    if (postState === "none") {
      this.children[2].style.display = "block"
    }
  }
}

const derenderComments = () => {
  return function () {
    console.log(this.parentElement);
    const postState = this.parentElement.style.display
    console.log(postState)
    if (postState === "block") {
      console.log(this.parentElement.style.display)
      this.parentElement.style.display = "none"
      console.log(this.parentElement.style.display)
    }
    
  }
}

const addComment = () => {
  return async function (event) {
    event.preventDefault();

    const body = document.getElementById("comment").value.trim();
    const post_id = document.querySelector(".comment-form").dataset.post;
    
    if (body) {
      const response = await fetch('/api/comment', {
        method: "POST",
        body: JSON.stringify({ body, post_id }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace(`/`);
      } else {
        document.querySelector(".comment-form").reset();
      }
    }
  }
}
 
const posts = document.querySelectorAll("#post");
const mini = document.querySelectorAll(".minimize");
const commentForm = document.querySelectorAll('.comment-form');

for (let i = 0; i < posts.length; i++) {
  posts[i].addEventListener("click", renderComments())
}

for (let i = 0; i < mini.length; i++) {
  mini[i].addEventListener("click", derenderComments())
}

for (let i = 0; i < commentForm.length; i++) {
  commentForm[i].addEventListener("submit", addComment())
}