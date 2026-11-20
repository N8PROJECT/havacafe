"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { locations, menu, menuArchive, whatsapp } from "@/lib/hava";
import { ease } from "./motion";

const formatPrice = new Intl.NumberFormat("id-ID");
const gallery = [
  { image: "/images/interior.webp", alt: "An imagined dining room with warm lights and olive upholstery", title: "Room to linger", note: "Editorial illustration of a HAVA-inspired dining room." },
  { image: "/images/grill.webp", alt: "Mixed grill on a dark table", title: "From the grill", note: "An editorial interpretation of HAVA’s mixed grill." },
  { image: "/images/kunafa.webp", alt: "Golden kunafa with pistachios", title: "Something sweet", note: "An editorial interpretation of HAVA’s kunafa." }
];

function Tabs({ labels, active, onChange, id, label }: {
  labels: string[]; active: number; onChange: (index: number) => void; id: string; label: string;
}) {
  const reduced = useReducedMotion();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = { ArrowLeft: (index - 1 + labels.length) % labels.length, ArrowRight: (index + 1) % labels.length, Home: 0, End: labels.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    onChange(next);
    buttons.current[next]?.focus();
  }
  return <div role="tablist" aria-label={label} className="tabs">
    {labels.map((text, index) => (
      <button key={text} id={`${id}-tab-${index}`} role="tab" type="button"
        ref={(node) => { buttons.current[index] = node; }} tabIndex={active === index ? 0 : -1}
        aria-selected={active === index} aria-controls={`${id}-panel-${index}`}
        onClick={() => onChange(index)} onKeyDown={(event) => handleKeys(event, index)}>
        {active === index && <motion.span className="tab-marker" layoutId={reduced ? undefined : id} transition={{ duration: 0.35, ease }} />}
        <span className="tab-label">{text}</span>
      </button>
    ))}
  </div>;
}

export function MenuShowcase() {
  const [active, setActive] = useState(0);
  const id = useId();
  const reduced = useReducedMotion();
  return (
    <>
      <Tabs active={active} onChange={setActive} labels={menu.map((group) => group.label)} id={id} label="Menu categories" />
      {menu.map((group, index) => (
        <div key={group.label} id={`${id}-panel-${index}`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} hidden={active !== index}>
          {active === index && <motion.div className="menu-grid" initial={reduced ? false : { opacity: 0.35 }}
            animate={{ opacity: 1 }} transition={{ duration: 0.32, ease }}>
            <div className="menu-photo">
              <motion.div initial={reduced ? false : { scale: 1.07 }} animate={{ scale: 1 }} transition={{ duration: 0.65, ease }}>
                <Image src={group.image} alt={group.alt} fill sizes="(max-width: 750px) 90vw, 43vw" />
              </motion.div>
            </div>
            <div className="dish-column">
              <ul>
                {group.dishes.map((dish) => <motion.li key={dish.name} whileHover={reduced ? undefined : { x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                  <div><h3>{dish.name}</h3><p>{dish.description}</p></div>
                  <span>Rp {formatPrice.format(dish.price)}</span>
                </motion.li>)}
              </ul>
              <a className="text-link" href={menuArchive} target="_blank" rel="noreferrer">View the full Mampang menu</a>
              <p className="fine-print">Published dine-in prices may change.</p>
            </div>
          </motion.div>}
        </div>
      ))}
    </>
  );
}

export function Gallery() {
  const [[active, direction], setSlide] = useState([0, 1]);
  const reduced = useReducedMotion();
  function step(amount: number) {
    setSlide(([index]) => [(index + amount + gallery.length) % gallery.length, amount]);
  }
  const slide = gallery[active];
  return (
    <figure className="gallery" aria-label="The HAVA dining experience">
      <div className="gallery-viewport">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div key={slide.image} className="gallery-image" custom={direction}
            variants={{ from: (dir: number) => ({ opacity: 0, x: reduced ? 0 : dir * 26 }), to: { opacity: 1, x: 0 }, out: (dir: number) => ({ opacity: 0, x: reduced ? 0 : dir * -26 }) }}
            initial={reduced ? false : "from"} animate="to" exit="out" transition={{ duration: reduced ? 0 : 0.45, ease }}
            drag={reduced ? false : "x"} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12}
            onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 45) step(info.offset.x < 0 ? 1 : -1); }}>
            <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 750px) 90vw, 52vw" draggable={false} />
          </motion.div>
        </AnimatePresence>
      </div>
      <figcaption>
        <div aria-live="polite"><strong>{slide.title}</strong><small>{slide.note}</small></div>
        <div className="gallery-controls">
          <button type="button" aria-label="Previous image" onClick={() => step(-1)}><ChevronLeft size={19} /></button>
          <button type="button" aria-label="Next image" onClick={() => step(1)}><ChevronRight size={19} /></button>
        </div>
      </figcaption>
    </figure>
  );
}

export function Visit() {
  const [active, setActive] = useState(0);
  const id = useId();
  const reduced = useReducedMotion();
  return (
    <>
      <Tabs active={active} onChange={setActive} labels={locations.map((location) => location.name)} id={id} label="HAVA branches" />
      {locations.map((location, index) => (
        <div key={location.name} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={active !== index}>
          {active === index && <motion.div className="visit-details" initial={reduced ? false : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease }}>
            <p><MapPin size={19} aria-hidden />{location.address}</p>
            {location.hours && <p><Clock size={19} aria-hidden />{location.hours}</p>}
            {location.phone && <p><Phone size={19} aria-hidden /><a href={`tel:${location.phone.replaceAll(" ", "").replaceAll("-", "")}`}>{location.phone}</a></p>}
            <div className="visit-links">
              <a className="button button-dark" href={location.map} target="_blank" rel="noreferrer">Get directions</a>
              {location.contact && <a className="text-link" href={location.contact} target="_blank" rel="noreferrer">WhatsApp {location.name}</a>}
            </div>
          </motion.div>}
        </div>
      ))}
    </>
  );
}

export function Reservation() {
  const reduced = useReducedMotion();
  function sendRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const [year, month, day] = String(data.get("date")).split("-").map(Number);
    const date = new Date(year, month - 1, day).toLocaleDateString("en-GB", { dateStyle: "long" });
    const message = `Hello HAVA Mampang, I'd like to request a table for ${data.get("guests")} on ${date} at ${data.get("time")} WIB. My name is ${String(data.get("name")).trim()}. Is a table available?`;
    window.location.assign(`${whatsapp}?text=${encodeURIComponent(message)}`);
  }
  function setMinimumDate(event: React.FocusEvent<HTMLInputElement>) {
    event.currentTarget.min = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Jakarta" }).format(new Date());
  }
  return (
    <form className="reservation-form" onSubmit={sendRequest}>
      <label>Your name<input name="name" autoComplete="name" required maxLength={80} pattern=".*\S.*" placeholder="Full name" /></label>
      <label>Guests<input name="guests" type="number" min={1} step={1} defaultValue={2} required /></label>
      <label>Date<input name="date" type="date" required onFocus={setMinimumDate} /></label>
      <label>Time (WIB)<input name="time" type="time" min="09:00" max="22:59" required /></label>
      <motion.button type="submit" className="button button-gold" whileTap={reduced ? undefined : { scale: 0.98 }}><MessageCircle size={18} aria-hidden /> Request on WhatsApp</motion.button>
      <p>WhatsApp opens with your request. The restaurant confirms availability.</p>
    </form>
  );
}
