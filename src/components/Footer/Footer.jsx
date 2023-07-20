import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Marketplace de Frutas & Verduras</p>
        </footer>
    );
}

export default Footer;
