import { toast } from "react-toastify";
import ShareIcon from "../svgs/share-alt.svg";

interface Props {
  url?: string;
  text?: string;
}

const ShareButton: React.FC<Props> = ({ url, text }) => {
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text: text || url, url });
      } catch (e) {
        toast.error("Not shared");
      }
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard");
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
