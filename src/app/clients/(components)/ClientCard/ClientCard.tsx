import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Separator,
} from "@/components/ui";

interface ClientCardProps {
  user: User;
}

export const ClientCard = ({ user }: ClientCardProps) => (
  <Card className="w-full max-w-3xl">
    <Collapsible>
      <CollapsibleTrigger asChild className="cursor-pointer">
        <CardHeader className="flex flex-row items-start gap-4 w-full">
          <div>
            <CardTitle className="text-2xl">
              {user.lastName} {user.firstName} {user.middleName}
            </CardTitle>
            <CardDescription>ID: {user.id}</CardDescription>
          </div>
          <Badge variant={user.isActive ? "outline" : "destructive"}>
            {user.isActive ? "Active" : "Inactive"}
          </Badge>
        </CardHeader>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent className="grid gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Персональная информация
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Полное имя
                </p>
                <p>
                  {user.lastName} {user.firstName} {user.middleName}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Дата рождения
                </p>
                <p>{new Date(user.birthDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Контактная информация
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Телефон
                </p>
                <p>{user.phoneNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Email
                </p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">Документы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  СНИЛС
                </p>
                <p>{user.snils}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Паспорт
                </p>
                <p>{user.passport}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">Системная информация</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Создан
                </p>
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Последнее обновление
                </p>
                <p>{new Date(user.updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  </Card>
);
