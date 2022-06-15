import Image from 'next/image'; 

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
             I am a fulstack web developer based in Munich, holding a bachelor degree in computer science specializing in software engineering and
              studying Masters in Informatics at Tu Munich.
         </p>
     </section>
 );

}
export default Hero;