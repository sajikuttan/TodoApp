import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error :- ", error, errorInfo);
    }

    render(){
        if(this.state.hasError) {
            return (<h2>Something Went Wrong!! Please contact to admin</h2>);
        }

        return this.props.children;
    }
}

export default ErrorBoundary;