export default function NewsletterForm() {
  return (
    <div className="max-w-lg mx-auto rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{position:"relative", width:"100%", height:0, paddingBottom:"75%"}}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScEljvnpvYdni_A9QZbFB6C7WiPn6XSlzWL99cGQcAzSVQemQ/viewform?embedded=true"
        style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
        title="SMF AI Weekly Newsletter Signup"
      >
        Loading…
      </iframe>
    </div>
  );
}
