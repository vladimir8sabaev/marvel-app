import img from './error.gif';

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: 'block',
        width: '250px',
        aspectRatio: '1/1',
        objectFit: 'contain',
        margin: '0 auto',
      }}
      src={img}
      alt="error"
    />
  );
};

export default ErrorMessage;
