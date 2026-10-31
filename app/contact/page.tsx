import Button from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/LabUI";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-12 px-6 overflow-hidden mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-5">
            Write to Michael
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Questions about the lab, the work, or the weekly letter are welcome.
            Michael reads them.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-24 bg-forge-navy">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-display font-bold mb-4 text-text-primary">Direct</h2>
              <p className="text-sm text-text-muted mb-2">
                <a href="mailto:michael@smfworks.com" className="text-forge-ember hover:underline">
                  michael@smfworks.com
                </a>
              </p>
              <p className="text-sm text-text-muted">
                <a
                  href="https://x.com/MichaelGannotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-forge-ember"
                >
                  X @MichaelGannotti ↗
                </a>
              </p>
              <p className="text-sm text-text-dim mt-3">Pittsboro, NC</p>
            </div>

            <div className="surface-card p-7">
              <h3 className="font-display font-bold text-lg mb-3 text-text-primary">What to expect</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li>Personal response within 48 hours</li>
                <li>Notes about the lab, the work, or the weekly letter</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-2 text-text-primary">SMF AI Weekly</h3>
              <p className="text-text-muted text-sm mb-3">
                The public lab notebook. No sales sequence.
              </p>
              <Button href="/newsletter" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
