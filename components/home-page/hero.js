import Image from 'next/image'; 
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
  } from 'next-share';

import styles from './hero.module.css';

function Hero () {
 return (
     <section className={styles.hero}>
         <div className={styles.image}>
            <Image 
            src='/images/site/masihImage.jpg' 
            alt='An image showing Masih' 
            width={300} 
            height={300}/>
         </div>
         <h1>Hello! I am Masih</h1>
         <p>
             I am a fullstack web developer based in Munich, holding a bachelor degree in computer science specializing in software engineering and
              studying Masters in Informatics at Tu Munich.
         </p>
         <div>
            <LinkedinShareButton url=''>
                <LinkedinIcon size={32} />
            </LinkedinShareButton>
            <WhatsappShareButton>
                <WhatsappIcon size={32} />
            </WhatsappShareButton>
         </div>
     </section>
 );

}
export default Hero;