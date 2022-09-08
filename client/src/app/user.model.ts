export interface UserModel{
    user_id?: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    phone_number: number,
    role: string,
    address: string,
    created_date: string,
}

export enum Role {
    superAdmin = "SuperAdmin",
    Admin = "Admin",
    Subscriber = "Subscriber"
}

export enum columnName{
    firstName = 'First Name', 
    middleName = 'Middle Name', 
    lastName= 'Last Name',
    email= 'Email',
    phoneNumber = 'Phone Number',
    role= 'Role',
    address = 'Address',
    createdDate = 'User Created Date',
    edit = 'Edit'
  }