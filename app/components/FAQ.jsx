import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { faqs } from "./data";

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeading
          label="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="The questions I get asked most before a project starts. If yours isn't here, send it over on WhatsApp and I'll answer directly."
        />
        <div style={{ display: "grid", gap: 16 }}>
          {faqs.map(({ q, a }, i) => (
            <Reveal key={q} delay={i * 60}>
              <div className="neu-card" style={{ borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{q}</h3>
                <p style={{ color: "rgba(245,240,232,0.55)", fontSize: 14, lineHeight: 1.85 }}>{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
