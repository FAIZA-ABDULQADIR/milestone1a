import Image from "next/image";
import Link from "next/link";
import image from "../../public/background1.png"
import style from "../../src/style/home.module.css"




export default function Home() {
  return (<div className={style.container}>
    
    
    <div className={style.portfolioCard}>
    <div className={style.textSection}>
          <h1>Hi! WELCOME.....</h1>
          <h2>I'm <span className={style.highlight}> FAIZA </span></h2>
          <h3>an aspiring UI/UX Developer </h3>
          <p>
          I am passionate about creating user-centered designs that are both functional and visually appealing. With each project, I am focused on improving my skills and understanding the nuances of great user interfaces.

Alongside my design journey, I am diving into the world of artificial intelligence, eager to combine my love for design with the power of AI. I am excited to learn and grow in this ever-evolving field.

Join me as I explore, learn, and create innovative experiences!
          </p>
          <Link href={"/about-me"}>
        <button className={style.moreButton}>More About Me</button>
      </Link>
          
        </div>
        <div className={style.imageSection}>
          <Image
            src="/pro.avif" // add your own profile image in the public folder
            alt=""
            width={400}
            height={400}
            className={style.profileImage}
          />
       
        </div>
      </div>
    </div>
  );
}









    
    





 