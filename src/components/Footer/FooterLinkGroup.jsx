export default function FooterLinkGroup({ title, links }) {
  return (
    <div className="space-y-2 text-center sm:text-left">
      <h4 className="font-semibold">{title}</h4>
      {links.map((text, i) => (
        <a key={i} href="#" className="block text-gray-600 hover:underline">
          {text}
        </a>
      ))}
    </div>
  );
}
