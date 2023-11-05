import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deserunt
        amet quas excepturi sit dolorum nihil nostrum rerum veritatis
        aspernatur. Molestiae rerum, ullam non inventore aperiam totam minus!
        Tempore, illo!
      </p>
      <Link to="/"> Back to main page</Link>
    </div>
  );
};

export default Page404;
