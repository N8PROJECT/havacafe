import { Camera } from "lucide-react";
import Image from "next/image";
import { Gallery, MenuShowcase, Reservation, Visit } from "@/components/experiences";
import { Hero, Reveal, TactileLink } from "@/components/motion";
import { Navigation, Wordmark } from "@/components/navigation";
import { instagram, navigation, whatsapp } from "@/lib/hava";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top" />
      <Navigation />
      <main id="main">
        <Hero />
        <section id="story" tabIndex={-1} className="story section-pad" aria-labelledby="story-title">
          <div className="shell story-grid">
            <div className="story-copy">
              <Reveal>
                <p className="eyebrow section-label"><span /> Our story</p>
                <h2 id="story-title">Good food.<br /><em>Better shared.</em></h2>
                <p>HAVA began in Bintaro and brought its table to Mampang in 2025. Here, Palestinian rice dishes and generous grills sit alongside Italian pizza, Turkish pide, and pastry.</p>
                <p>Start with hummus for the table, share a pot of Maqluba, and stay for warm kunafa and a pot of Adani tea.</p>
              </Reveal>
            </div>
            <figure className="story-photo">
              <Image src="/images/maqluba.webp" alt="Editorial illustration of Palestinian Maqluba on a ceramic platter" fill sizes="(max-width: 750px) 90vw, 41vw" />
              <figcaption>Palestinian Maqluba</figcaption>
            </figure>
          </div>
        </section>
        <section id="menu" tabIndex={-1} className="menu-section section-pad" aria-labelledby="menu-title">
          <div className="shell">
            <Reveal>
              <p className="eyebrow section-label"><span /> The menu · Mampang</p>
              <div className="section-heading"><h2 id="menu-title">At the <em>HAVA table.</em></h2><p>Explore a few favourites from the rice pot, the grill, the oven, and the pastry kitchen.</p></div>
            </Reveal>
            <MenuShowcase />
          </div>
        </section>
        <section className="experience section-pad" aria-labelledby="experience-title">
          <div className="shell experience-grid">
            <Reveal>
              <p className="eyebrow section-label"><span /> Layali Filistina</p>
              <h2 id="experience-title">A night of<br /><em>Palestinian food.</em></h2>
              <p>When Adara Relief International brought Layali Filistina to HAVA Mampang, guests helped turn out the Maqluba and watched kunafa cook in front of them. Dinner became a way to share the traditions behind each dish.</p>
              <a className="text-link" href="https://medium.com/p/4ccf92081921" target="_blank" rel="noreferrer">Read the story of Layali Filistina</a>
            </Reveal>
            <Gallery />
          </div>
        </section>
        <section id="visit" tabIndex={-1} className="visit section-pad" aria-labelledby="visit-title">
          <div className="shell visit-grid">
            <Reveal><p className="eyebrow section-label"><span /> Find us</p><h2 id="visit-title">Come on <em>over.</em></h2></Reveal>
            <div><Visit /></div>
          </div>
        </section>
        <section id="reserve" tabIndex={-1} className="reservation section-pad" aria-labelledby="reservation-title">
          <div className="shell reservation-grid">
            <Reveal>
              <p className="eyebrow section-label"><span /> Reservations · Mampang</p>
              <h2 id="reservation-title">There’s room<br /><em>at the table.</em></h2>
              <p>Plan a meal at HAVA Mampang. Open daily, 09.00–23.00 WIB.</p>
              <TactileLink href={whatsapp} className="text-link">Message HAVA Mampang directly</TactileLink>
            </Reveal>
            <Reservation />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <a href="#top" aria-label="HAVA home"><Wordmark /></a>
            <nav aria-label="Footer navigation">{navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
            <a href={instagram} className="social-link" target="_blank" rel="noreferrer" aria-label="HAVA Mampang on Instagram"><Camera size={21} aria-hidden /></a>
          </div>
          <div className="footer-bottom"><span>HAVA Restaurant & Cafe · Jakarta</span><span>AI-generated editorial imagery for illustration.</span></div>
        </div>
      </footer>
    </>
  );
}
