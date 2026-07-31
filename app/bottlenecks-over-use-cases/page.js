import OperatingPrinciplePage, {
  metadataForOperatingPrinciple,
} from "../../components/operating-principle/OperatingPrinciplePage";

export const metadata = metadataForOperatingPrinciple("bottlenecks-over-use-cases");

export default function BottlenecksOverUseCasesPage() {
  return <OperatingPrinciplePage slug="bottlenecks-over-use-cases" />;
}
