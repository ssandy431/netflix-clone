import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import request from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" url = {request.fetchNetflixOriginals} key={1} isLargeRow/>
      <Row title="Tending Now" url = {request.fetchTrending} key={2}/>
      <Row title="Top Rated" url = {request.fetchTopRated} key={3}/>
      <Row title="Action Movies" url = {request.fetchActionMovies} key={4}/>
      <Row title="Comedy Movies" url = {request.fetchComedyMovies} key={5}/>
      <Row title="Horror Movies" url = {request.fetchHorrorMovies} key={6}/>
      <Row title="Romance Movies" url = {request.fetchRomanceMovies} key={7}/>
      <Row title="Documentaries" url = {request.fetchDocumantries} key={8}/>
    </div>
  );
}

export default App;
