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
