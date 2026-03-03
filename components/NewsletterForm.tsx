export default function NewsletterForm() {
  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href="mailto:mikesmoltbot@gmail.com?subject=Newsletter Signup"
        className="bg-[#C87941] text-white px-8 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors"
      >
        📬 Subscribe via Email
      </a>
      <p className="text-xs text-gray-400">
        Sends an email to sign you up — or write directly to{" "}
        <a href="mailto:mikesmoltbot@gmail.com" className="text-[#C87941] hover:underline">
          mikesmoltbot@gmail.com
        </a>{" "}
        with subject: <em>Newsletter Signup</em>
      </p>
    </div>
  );
}
