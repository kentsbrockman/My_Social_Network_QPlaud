import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import Header from '../components/layouts/Header';
import SigninContainer from '../components/signin/SigninContainer';

const Home = () => {

  const token = Cookies.get('token');
  const decoded = jwt_decode(token);
  console.log("Coucou token page d'accueil", token);
  console.log("Coucou token décodé", decoded);

  return (
    <>
      <Header />
      <SigninContainer />
    </>
  );
}

export default Home;