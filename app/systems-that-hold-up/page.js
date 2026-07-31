import OperatingPrinciplePage, {
  metadataForOperatingPrinciple,
} from "../../components/operating-principle/OperatingPrinciplePage";

export const metadata = metadataForOperatingPrinciple("systems-that-hold-up");

export default function SystemsThatHoldUpPage() {
  return <OperatingPrinciplePage slug="systems-that-hold-up" />;
}
