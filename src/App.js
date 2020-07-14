
import React, { useState }from "react";
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import data from './dummy-data'
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(data)
  //stretch -- setting up the start for search bar
  const [term, setTerm] = useState('')

  const likePost = postId => {
    setPosts(
      posts.map(item => item.id === postId ? { ...item, likes: item.likes + 1 } : item)
    )
  };

  //stretch -- a search bar handler for receiving the input and set the term 
  const onInputChange = (event) => { 
    setTerm(event.target.value)
  }

  //stretch -- setting up the function when sumbit the form by default
  const onFormSubmit = (event) => {
    //at first, it needs to prevent the form from refreshing the page once the user hits enter
    event.preventDefault()
    //if the input is empty, return the whole data
    if (term === '') { setPosts(data) } else
    //if the input includes a string from certain username, return the item  
    setPosts(
      posts.filter(item => item.username.includes(term))
    )
  }

  return (
    <div className="App">
      <SearchBar term={term} onInputChange={onInputChange} onFormSubmit={onFormSubmit} />
      <Posts posts = {posts} likePost ={likePost} />
    </div>
  );
};

export default App;
