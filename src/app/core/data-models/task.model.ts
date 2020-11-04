import { EMPTY_STRING } from "../constants/constants";

export class Task {
    taskid: string = EMPTY_STRING;
    message: string = EMPTY_STRING;
    priority: string = EMPTY_STRING;
    assigned_to: string = EMPTY_STRING;
    due_date: string = EMPTY_STRING;
}
