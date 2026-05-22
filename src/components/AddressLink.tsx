import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  MAPS_URL,
} from "../constants/site";

type Props = {
  className?: string;
};

export function AddressLink({ className = "" }: Props) {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors hover:text-gold-bright ${className}`}
    >
      {ADDRESS_LINE_1}
      <br />
      {ADDRESS_LINE_2}
    </a>
  );
}
