interface User {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    snils: string;
    passport: string;
    birthDate: Date;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}

interface CreateUserDto {
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    snils: string;
    passport: string;
    birthDate: Date;
}
