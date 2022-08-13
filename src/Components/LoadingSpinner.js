import './LoadingSpinner.css';

const LoadingSpinner = (props) => {
  return <div className="spinner"><p>{props.msg}</p></div>;
}

export default LoadingSpinner;