import OperatingPrinciplePage, {
  metadataForOperatingPrinciple,
} from "../../components/operating-principle/OperatingPrinciplePage";

export const metadata = metadataForOperatingPrinciple("judgment-over-generation");

export default function JudgmentOverGenerationPage() {
  return <OperatingPrinciplePage slug="judgment-over-generation" />;
}
