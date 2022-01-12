export interface PatientSearchModel {
  resourceType: string;
  id: string;
  total: number;
  type: string;
  meta: MetaModel;
  entry: EntryModel[];
}

export interface MetaModel {
  lastUpdated: string;
}

export interface EntryModel {
  fullUrlL: string;
  resource: ResourceTypeModel;
}
export interface ResourceTypeModel {
  resourceType: string;
  id: string;
  text: TextModel;
  active: boolean;
  name: NameModel[];
  telecom: TelecomModel[];
  gender: string;
  birthDate: string;
  deceasedBoolean: boolean;
  address: AdressModel[];
  identifier: IdentifierModel[];
}

export interface TextModel {
  status: string;
  div: string;
}

export interface NameModel {
  use: string;
  family: string;
  given: string[];
}

export interface TelecomModel {
  system: string;
  value: string;
  use: string;
}

export interface AdressModel {
  use: string;
  line: string[];
  city: string;
  postalCode: string;
  country: string;
}

export interface IdentifierModel {
  use: string;
  system: string;
  value: string;
}
