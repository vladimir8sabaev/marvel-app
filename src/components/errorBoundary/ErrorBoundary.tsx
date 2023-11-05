import { Component, ErrorInfo } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
