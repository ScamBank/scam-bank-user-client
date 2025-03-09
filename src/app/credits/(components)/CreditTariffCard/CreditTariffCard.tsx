import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { AlertCircle, Clock, CreditCard, Calendar } from "lucide-react";
import { ComponentProps } from "react";

interface CreditTariffCardProps extends ComponentProps<"div"> {
  tariff: CreditTariff;
  withButton?: boolean;
}

export const CreditTariffCard = ({
  tariff,
  withButton = false,
  className,
  ...props
}: CreditTariffCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Number(value));
  };

  return (
    <Card className=" flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{tariff.TarifName}</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {tariff.InterestRate}% Ставка
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <CreditCard className="size-4 text-muted-foreground" />
            <span className="text-sm">
              Сумма кредита:{" "}
              <span className="font-semibold">
                {formatCurrency(tariff.MinAmount)} -{" "}
                {formatCurrency(tariff.MaxAmount)}
              </span>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              Максимальный срок:{" "}
              <span className="font-semibold"> {tariff.MaxTerm} </span> дней
            </span>
          </li>
          <li className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              Штраф за просрочку платежа:{" "}
              <span className="font-semibold">
                {tariff.LatePaymentPenalty}%
              </span>{" "}
              в день
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              Льготный период:{" "}
              <span className="font-semibold">{tariff.GracePeriod}</span> дней
            </span>
          </li>
        </ul>
      </CardContent>
      {withButton && (
        <CardFooter>
          <Button className="w-full">Взять кредит</Button>
        </CardFooter>
      )}
    </Card>
  );
};
