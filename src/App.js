import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import BrowseJobs from './components/Browsejobs';
import Navbar from './components/Navbar';
import Candidates from './components/candidates';
import Blog from './components/blog';
import BlogSingle from './components/blog-single';
import JobPost from './components/job-post';
import NewPost from './components/new-post';
import BackgroundImage from './components/homeComponent/Backgroundimage';


class App extends Component{
  render(){
    return(
      <div>
        <Router>

      <Navbar/>

      <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route  path='/browsejobs' component={BrowseJobs}></Route>
    <Route  path='/candidates' component={Candidates}></Route>
    <Route  path='/blogs' component={Blog}></Route>
    <Route  path='/blogsingle' component={BlogSingle}></Route>
    <Route  path='/jobpost' component={JobPost}></Route>
    <Route  path='/newpost' component={ NewPost}></Route>
    <Route path='/backgroundimage' component={BackgroundImage}/>
    </Switch>

    </Router>
    
    </div>
    )
  }
}


export default App;
