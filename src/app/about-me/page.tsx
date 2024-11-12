import style from "../about-me/about-me.module.css"

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.portfolioCard}>
        <h1 className={style.heading}>Unstoppable: My Journey from Doubt to Dreams</h1>
        
        <div className={style.introduction}>
          <p className={style.introText}>
            I never imagined I would be where I am today. As a Muslim girl, born and raised in a traditional household, my dreams always seemed to be limited by the walls around me. But I was determined—determined to break free from the expectations, and make my mark in a world that I had only observed from the sidelines. What I didn’t know was that my journey would lead me to a field I never saw coming—<strong>artificial intelligence</strong>—and it would change everything.
          </p>
        </div>

        <div className={style.section}>
          <h2 className={style.sectionTitle}>A Leap of Faith into AI</h2>
          <p className={style.paragraph}>
            I had always been drawn to the humanities, particularly Islamic studies. The deep connection I felt with my faith and the desire to contribute to my community through knowledge was a driving force in my life. I began my master’s degree in <strong>Islamiyat</strong>, hoping to make an impact in fields that resonated with me—education, culture, and religious guidance. However, life had something else in store for me.
          </p>
        </div>

        <div className={style.section}>
          <h2 className={style.sectionTitle}>The Unlikely Opportunity</h2>
          <p className={style.paragraph}>
            One day, I was presented with an opportunity that seemed too good to pass up: to study at a <strong>governor house</strong>. This was a rare and prestigious opportunity that many would have dreamed of. But there was a catch. The subject I was being offered was not my <em>cup of coffee</em>—<strong>artificial intelligence</strong>. A field dominated by the language of machines, algorithms, and data—everything I had no prior experience with. It felt like I was being asked to dive into an ocean without knowing how to swim.
          </p>
        </div>

        <div className={style.section}>
          <h2 className={style.sectionTitle}>The Leap of Faith</h2>
          <p className={style.paragraph}>
            At first, I hesitated. I thought, “This is not me.” I had always thought of myself as someone who would work in fields related to faith, culture, and community. But after deep reflection, I realized something profound: <strong>What if I could make a difference in this space too?</strong> What if I could bridge the gap between technology and the values I hold dear?
          </p>
        </div>

        <div className={style.section}>
          <h2 className={style.sectionTitle}>Becoming Unstoppable</h2>
          <p className={style.paragraph}>
            Through sheer determination and a commitment to both my faith and my studies, I became unstoppable. I realized that it is okay to venture outside of your comfort zone. In fact, sometimes that is where the magic happens. AI, once foreign and intimidating, became an avenue for me to <strong>serve my community</strong> in ways I never imagined. I began to see how this technology could be aligned with the values I had been taught—<strong>compassion</strong>, <strong>knowledge</strong>, and <strong>service to humanity</strong>.
          </p>
        </div>

        <div className={style.conclusion}>
          <p className={style.conclusionText}>
            Today, I stand at the intersection of technology and tradition. I am no longer just a Muslim girl following a predefined path. I am a woman who is <strong>unwavering</strong> in the pursuit of her dreams, who is not afraid to venture into new fields and break barriers. Whether it is AI, Islamic studies, or my volunteer work, each of these paths has helped shape me into the person I am today—strong, resilient, and driven by a sense of purpose.
          </p>
          <p className={style.finalWords}>
            My journey is not over. I have so much more to learn, so much more to contribute. But one thing I know for sure: <strong>nothing is impossible if you believe in yourself and stay true to your values.</strong> Today, I am unstoppable—not because I don’t face challenges, but because I’ve learned how to face them with faith, determination, and an open heart. And if I can do it, anyone can. 
          </p>
        </div>
      </div>
    </div>
  );
}
