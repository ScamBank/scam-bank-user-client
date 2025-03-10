interface CreateUserDto1S {
  Surname: string;
  Name: string;
  Patronymic: string;
  PhoneNumber: string;
  BirthDate: string;
  Address: string;
  PassportSeries: string;
  PassportNumber: string;
  Snils: string;
  UserType: "User";
}

type UserGuid = string;

interface User1c {
  UserGuid: UserGuid;
  Surname: string;
  Name: string;
  Patronymic: string;
  PhoneNumber: string;
  BirthDate: string;
  Address: string;
  PassportSeries: string;
  PassportNumber: string;
  Snils: string;
}

interface Account1c {
  AccountGuid: string;
  AccountState: "opened" | "closed";
  Account: string;
  Currency: "RUB";
  Balance: number;
}

type AccountOperation = {
  OperationDate: string;
  Amount: number;
} & (
  | {
      OperationType: "Пополнение";
      Where: string;
    }
  | {
      OperationType: "Снятие";
      From: string;
    }
);

interface AccountInfo extends Account1c {
  AccountOperations: AccountOperation[];
}

interface CreditTariff {
  TariffGuid: string;
  TariffName: string;
  InterestRate: number;
  MinAmount: number;
  MaxAmount: number;
  MaxTerm: number;
  LatePaymentPenalty: number;
  GracePeriod: number;
}

interface Credit {
  CreditGuid: string;
  Date: string;
  TariffName: string;
  Currency: "RUB";
  Amount: number;
  AmountWithPercent: number;
  IsClosed: boolean;
}
