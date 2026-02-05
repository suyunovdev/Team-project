import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '5rem 2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '6rem', fontWeight: '900', color: '#667eea', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a202c' }}>Page Not Found</h2>
            <p style={{ fontSize: '1.125rem', color: '#718096', marginBottom: '2rem' }}>
                The page you're looking for doesn't exist.
            </p>
            <Link to="/" style={{ padding: '1rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600' }}>
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
