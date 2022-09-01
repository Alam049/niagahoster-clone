export function SocialMediaLink({ item: { icon, link } }) {
  return (
    <div className="rounded-full flex items-center justify-center p-3 w-12 h-12 bg-black">
      <a href={link}>
        <img src={icon} />
      </a>
    </div>
  );
}
