let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const consolePosts = () => {
  fetch('http://api.brewerydb.com/v2/?key=2dcca4c0a0c4c5c1ee4be305869e8bd4')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}
console.log('consolePosts')

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(consolePosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}
