import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import countries from "./countries"
import sport from "./Sport";
import movies from "./movies";



const Category=() => {

        function Content(){

        const screenName= JSON.stringify(localStorage.getItem('name'))
        const playerName=screenName.replace('"','')
        const playername = playerName.replace('"','')


        let history = useHistory();
        const clickHandlerSport = () => history.push("./sport");
        const clickHandlerContries= () =>history.push("./countries");
        const clickHandlerMovies = () => history.push("./movies");
        
        return(
            <div>
            <h1>welcome to quiz game:</h1>
             <p>Player: {playername}</p>
            
           <p>choose a category to start</p>
            <button onClick= {clickHandlerSport}>Sport</button>
            <button onClick= {clickHandlerContries}>Countries</button>
            <button onClick= {clickHandlerMovies}>Movies</button>
            </div>
        )
        }

    return(
        <div>
        
         <Router>
             <Switch>
                <Route path="/Sport" exact component={sport}/>
                <Route path="/countries" exact component={countries}/>
                <Route path="/movies" exact component={movies}/>
                <Route path= "/"  component = {Content}/>
             </Switch>
         </Router>
        </div>
    )

}
    
export default Category;
