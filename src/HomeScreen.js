import React from 'react' ;
import Banner from './Banner';
import "./Homescreen.css" ; 
import Nav from './Nav';
import Row from './Row';
import requests from './Request'
function HomeScreen() {
    return (
        <div className="homeScreen">
          
            <Nav/> 
             
        <Banner/>
            
            <Row
            title = "NETFLIX ORIGINALS "
            fetchURL={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row
            title = "trending now  "
            fetchURL={requests.fetchTrending}
            
            />
           <Row
            title = "documentaries"
            fetchURL={requests.fetchDocumentaries}
            
            />
           <Row
            title = "romance movies"
            fetchURL={requests.fetchRomanceMovies}
            
            />
             <Row
            title = "comedy movies "
            fetchURL={requests.fetchComedyMovies}
            
            />
             <Row
            title = "horror movies "
            fetchURL={requests.fetchHorrorMovies}
            
            />
            
        </div>
    )
}

export default HomeScreen
