import OperatingPrinciplePage, {
  metadataForOperatingPrinciple,
} from "../../components/operating-principle/OperatingPrinciplePage";

export const metadata = metadataForOperatingPrinciple("quality-over-speed");

export default function QualityOverSpeedPage() {
  return <OperatingPrinciplePage slug="quality-over-speed" />;
}
