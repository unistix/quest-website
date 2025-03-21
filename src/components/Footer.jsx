const Footer = () => {
  var year = new Date().getFullYear()
    return (
      <div style={styles.footer}>
      
        Copyright &copy; {year} Xertz industries.
      </div>
    );
  };
  
  export default Footer;

  const styles = {
    footer: {
      
      
      width: '100%',
      textAlign: 'center',
      marginTop: '30px',
      
     
      
      color: '#333',  // Directly apply the text color to the footer for simplicity
     
    }
  };