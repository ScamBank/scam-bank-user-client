import { Badge, Card, CardContent, CardHeader } from "@/components/ui";
import { formatDate } from "date-fns";
import { CalendarIcon, CheckCircle, XCircle } from "lucide-react";

interface CreditCardProps {
  credit: Credit;
}

export const CreditCard = ({ credit }: CreditCardProps) => {
  return (
    <Card
      className={`w-full max-w-md transition-all ${credit.IsClosed ? "opacity-80" : "shadow-md"}`}
    >
      <CardHeader className="flex min-w-[350px] flex-row gap-6 items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            {credit.TariffName}
          </h3>
          <p className="text-sm text-muted-foreground flex items-center">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {formatDate(new Date(credit.Date), "dd.MM.yyyy")}
          </p>
        </div>
        <Badge
          variant={credit.IsClosed ? "outline" : "default"}
          className="ml-auto"
        >
          {credit.IsClosed ? (
            <span className="flex items-center">
              <XCircle className="mr-1 h-3 w-3" /> Closed
            </span>
          ) : (
            <span className="flex items-center">
              <CheckCircle className="mr-1 h-3 w-3" /> Active
            </span>
          )}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Сумма без процентов:</span>
            <span className="font-semibold">{credit.Amount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Сумма с процентами:</span>
            <span className="font-semibold">{credit.AmountWithPercent}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
