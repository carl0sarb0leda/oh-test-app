export type LogInProps = {
  userName: string;
  userPassword: string;
};

export type ErrorResponse = {
  httpStatusCode: number;
  errorMessage: string;
};

export type SessionTokenResponse = {
  sessionToken: string;
};

export type ClinicianDetailsProps = {
  username: string;
  role: string;
  title?: string;
  firstName: string;
  preferredName?: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
};

export type PatientListProps = {
  patients: {
    id: string;
    name: string;
  }[];
};

export type PatientDetailsProps = {
  title?: string;
  firstName: string;
  preferredName?: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
  age: number;
  sex: "Male" | "Female" | "Unknown" | "Indeterminate";
};
