import ShareIcon from "../svgs/share-alt.svg";

interface Props {
  url: string;
}

const ShareButton: React.FC<Props> = ({ url }) => {
  const share = () => {
    if (navigator.share) {
      navigator.share({ text: url, url });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
    }
  };
  return (
    <ShareIcon
      onClick={share}
      className="w-7 h-7 cursor-pointer fill-gray-500"
    />
  );
};

export default ShareButton;
