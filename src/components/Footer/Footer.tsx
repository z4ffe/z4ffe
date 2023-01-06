import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
   return (
       <div className={styles.footer}>
          <ul>
             <li><a href="http://github.com/z4ffe" target='_blank'><i className="fa-brands fa-github fa-xl"></i></a>
             </li>
             <li><a href="https://www.facebook.com/pavel.kulyasov/" target='_blank'><i
                 className="fa-brands fa-facebook fa-xl"></i></a></li>
             <li><a href="https://telegram.me/paul_lightman" target='_blank'><i
                 className="fa-brands fa-telegram fa-xl"></i></a></li>
             <li><a href="https://linkedin.com/in/pavel-kuliasov/" target='_blank'><i
                 className="fa-brands fa-linkedin fa-xl"></i></a></li>
             <li><a href="mailto: pavel.kulyasov@gmail.com"><i className="fa-regular fa-envelope fa-xl"></i></a></li>
          </ul>
          <a href="http://github.com/z4ffe" target="_blank">
             <div className={styles.author}>Handcrafted by Paul Lightman</div>
          </a>
       </div>
   );
};

export default Footer;
