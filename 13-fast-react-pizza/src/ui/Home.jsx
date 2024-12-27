import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  return (
    <div className="my-10 px-4 text-center  md:my-32">
      <h1 className="mb-8  text-xl font-semibold text-yellow-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          {' '}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser></CreateUser>
    </div>
  );
}

export default Home;
