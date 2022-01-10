import {get} from "../request";

const PATIENT_PREFIX = '/Patient';

export class PatientService {
    static getPatient(): Promise<any> {
        return get(`${PATIENT_PREFIX}?name=*a`)
            .then((response) => response);
    }
}
