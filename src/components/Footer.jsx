import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  var year = new Date().getFullYear()
    return (
      <div style={{color:"#333"}}>
      
        <p>Copyright &copy; {year} Xertz industries.</p>
        <p>
        <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-square-whatsapp" />
        <FontAwesomeIcon icon="fa-brands fa-square-youtube" />
        <FontAwesomeIcon icon="fa-brands fa-square-envelope" />
        </p>
      </div>
      
    );
  };
  
  export default Footer;

 