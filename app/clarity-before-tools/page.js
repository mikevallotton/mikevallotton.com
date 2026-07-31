import OperatingPrinciplePage, {
  metadataForOperatingPrinciple,
} from "../../components/operating-principle/OperatingPrinciplePage";

export const metadata = metadataForOperatingPrinciple("clarity-before-tools");

export default function ClarityBeforeToolsPage() {
  return <OperatingPrinciplePage slug="clarity-before-tools" />;
}
