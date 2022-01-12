import {get} from '../request';
import {PatientSearchModel} from '../../model/patientSearchModel';

const PATIENT_PREFIX = '/Patient';

export class PatientService {
  static getPatient(
    searchValue: string,
    query: string,
  ): Promise<PatientSearchModel> {
    return get<PatientSearchModel>(
      `${PATIENT_PREFIX}?${searchValue}=${query}`,
    ).then(response => response.getBody());
  }
}
